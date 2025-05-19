import express from 'express';
import axios from 'axios';
import 'dotenv/config.js';
import Manga from '../models/Manga.js';

const router = express.Router();

router.post('/ask', async (req, res) => {
    const { message } = req.body;

    try {
        // Buscar mangas con texto relacionado y poblar referencias
        const mangas = await Manga.find({
            $text: { $search: message }
        })
            .limit(5)
            .populate('author_id', 'name')     // Asumiendo que el autor tiene un campo 'name'
            .populate('category_id', 'name');  // Asumiendo que la categoría tiene un campo 'name'

        // Preparar contexto con los resultados
        const contexto = mangas.map(m =>
            `Título: ${m.title}\nAutor: ${m.author_id?.name || 'Desconocido'}\nCategoría: ${m.category_id?.name || 'Desconocida'}\nDescripción: ${m.description}`
        ).join('\n\n');

        // Crear prompt personalizado para Gemini
        const prompt = `
            Respondé como un experto en manga. Tené en cuenta la siguiente información de la base de datos:

            ${contexto}

            Pregunta del usuario: "${message}"
            `;

        // Llamar a Gemini
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: prompt }] }]
            }
        );


        console.log(response);


        const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No se pudo generar una respuesta.';
        res.json({ reply });

    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: 'Error al comunicarse con Gemini' });
    }
});

export default router;
