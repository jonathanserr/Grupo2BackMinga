import Chapter from "../../models/Chapter.js";

const UpdateChapters = async (req, res, next) => {
    try {
        const { idchapter } = req.params;
        const { title, order, pages } = req.body;

        // Validaciones mínimas
        if (!title && !order && !pages) {
            return res.status(400).json({ message: "No se proporcionaron datos para actualizar." });
        }

        // Construcción dinámica del objeto a actualizar
        const updateFields = {};

        if (title) updateFields.title = title;
        if (order) updateFields.order = order;

        // Validar y preparar la actualización de una página específica
        if (pages && typeof pages.page === "number" && typeof pages.info === "string") {
            const pageIndex = pages.page;
            const newUrl = pages.info;
            updateFields[`pages.${pageIndex}`] = newUrl;
        }

        // Ejecutar la actualización
        const updatedChapter = await Chapter.findOneAndUpdate(
            { _id: idchapter },
            { $set: updateFields },
            { new: true }
        );

        if (!updatedChapter) {
            return res.status(404).json({ message: "Capítulo no encontrado." });
        }

        res.status(200).json(updatedChapter);
    } catch (error) {
        next(error);
    }
};

export default UpdateChapters;
