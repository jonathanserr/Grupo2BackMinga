import Company from "../../models/Company.js";
import Author from "../../models/Author.js";

const desactiveUser = async (req, res, next) => {
  try {

    const { typeUser, iduser } = req.body;

    let model;

    if (typeUser === "author_id") {
      model = Author;
    } else if (typeUser === "company_id") {
      model = Company;
    } else {
      return res.status(400).json({ success: false, message: "Invalid user type" });
    }

    const user = await model.findById(iduser);

    console.log("Este es el usuario",user)
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    user.active = !user.active;
    await user.save();

    return res.status(200).json({
      success: true,
      message: `User ${user.active ? "activated" : "deactivated"} successfully`,
      active: user.active
    });

  } catch (error) {
    next(error);
  }
};

export default desactiveUser;
