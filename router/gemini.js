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
            .populate('category_id', 'name');
    }

    const wantsRecommendation = /recommend|suggest|another|other|give me|show me/i.test(message);

    if (mangas.length === 0 || wantsRecommendation) {
        mangas = await Manga.aggregate([{ $sample: { size: 3 } }]);
        mangas = await Manga.populate(mangas, [
            { path: 'author_id', select: 'name' },
            { path: 'category_id', select: 'name' }
        ]);
    }

    const contexto = mangas.map(m =>
        `Título: ${m.title}\nAutor: ${m.author_id?.name || 'Desconocido'}\nCategoría: ${m.category_id?.name || 'Desconocida'}\nDescripción: ${m.description}`
    ).join('\n\n');

    const categories = await Category.find().limit(10);
    const categoriasTexto = categories.map(c => `- ${c.name}`).join('\n');

    const prompt = `
    Answer briefly using only the following information from the manga and category database.

    Manga:
    ${contexto}

    Available Categories:
    ${categoriasTexto}

    User's Question: "${message}"

    If the question is about which manga or categories are available, reply in a friendly tone mentioning some titles or categories and encourage exploring more.

    Restrict your answer to the database information.  
    If you can't find relevant info, reply with something fun like:  
    "I don't have any info on that, but I bet someone in a manga made it up 😂"
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
