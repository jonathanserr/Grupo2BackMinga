
const error_404 = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Ruta no encontrada",
    });
};

export default error_404;