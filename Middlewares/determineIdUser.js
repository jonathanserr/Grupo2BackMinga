import Author from "../models/Author.js";
import Company from "../models/Company.js";

const getFieldByUserType = (role) => {
switch (role) {
    case 1: return "author_id";
    case 2: return "company_id";
    default:  return "user";
}
};

export default async function determineUserEntity(req, res, next) {
try {
    const { role, _id: userId } = req.user;
    
    
    const userField = getFieldByUserType(role);
    let userEntityId;

    if (role === 1) {
      // Autor: buscar documento Author por user_id
    const author = await Author.findOne({ user_id: userId });
    if (!author) {
        return res.status(404).json({ success: false, message: "Author not found" });
    }
    userEntityId = author._id;
    } else if (role === 2) {
      // Compañía: buscar documento Company por user_id
    const company = await Company.findOne({ user_id: userId });
    if (!company) {
        return res.status(404).json({ success: false, message: "Company not found" });
    }
    userEntityId = company._id;
    } else {
      // Usuario normal
    userEntityId = userId;
    }

    // Lo dejo disponible para los controladores siguientes
    req.userField    = userField;
    req.userEntityId = userEntityId;
    next();
  } catch (err) {
    next(err);
  }
}
