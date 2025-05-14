import user from "../../models/User.js";

export default async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);

    const newUser = await user.create(req.body);

    return res.status(200).json({
      success: true,
      message: "Signed Up successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
   
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: "El correo ya está registrado" });
    }

    // Errores de validación de Mongoose
    if (error.name === "ValidationError") {
      const mensajes = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({ success: false, message: mensajes.join(", ") });
    }

   
    return res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
};
