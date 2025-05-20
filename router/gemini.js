import express from 'express';
import axios from 'axios';
import 'dotenv/config.js';
import Manga from '../models/Manga.js';
import Category from '../models/Category.js';

const router = express.Router();

router.post('/ask', async (req, res) => {
    const { message } = req.body;

    const keywords = message.toLowerCase().match(/\b[\p{L}\p{N}_]{4,}\b/gu) || [];

    const orConditions = keywords.map(word => ({
        $or: [
            { title: { $regex: word, $options: 'i' } },
            { description: { $regex: word, $options: 'i' } }
        ]
    }));

    let mangas = [];

    if (orConditions.length) {
        mangas = await Manga.find({ $or: orConditions })
            .limit(5)
            .populate('author_id', 'name')
            .populate('company_id', 'name')
            .populate('category_id', 'name');
    }

    const wantsRecommendation = /recommend|suggest|another|other|give me|show me/i.test(message);

    if (mangas.length === 0 || wantsRecommendation) {
        mangas = await Manga.aggregate([{ $sample: { size: 3 } }]);
        mangas = await Manga.populate(mangas, [
            { path: 'author_id', select: 'name' },
            { path: 'company_id', select: 'name' },
            { path: 'category_id', select: 'name' }
        ]);
    }


    const contexto = mangas.map(m =>
        `Título: ${m.title}\n${m.company_id ? "Company" : "Author" } : ${m.author_id?.name || m.company_id?.name || 'Desconocido'}\nCategoría: ${m.category_id?.name || 'Desconocida'}\nDescripción: ${m.description}`
    ).join('\n\n');

    const categories = await Category.find().limit(10);
    const categoriasTexto = categories.map(c => `- ${c.name}`).join('\n');

    const prompt = `
    You are a friendly manga assistant that replies briefly using the following information from the manga and category database.

    Manga:
    ${contexto}

    Available Categories:   
    ${categoriasTexto}

    User's Message: "${message}"

    Instructions:
    - If the user greets (e.g., "hi", "hello", "hey"), respond in a warm, fun tone and ask what kind of manga they like or suggest exploring categories.
    - If the user asks what manga or categories are available, mention a few interesting titles or categories and invite them to explore more.
    - If the user asks a specific question related to the manga or categories listed, answer using only the database info.
    - If you can't find relevant info, say something lighthearted like:
      "I don't have any info on that, but I bet someone in a manga made it up 😂"

    Always stay friendly and conversational.

    `;


    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            { contents: [{ parts: [{ text: prompt }] }] }
        );

        const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No se pudo generar una respuesta.';
        res.json({ reply });

    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: 'Error al comunicarse con Gemini' });
    }
});


export default router;
