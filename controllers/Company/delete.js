import Company from "../../models/Company.js";

const DeleteCompany = async (req, res, next) => {
    try {
        const idCompany = req.params.idCompany;

        const result = await Company.deleteOne({ _id: idCompany });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Company not found" });
        }

        return res.status(200).json({ message: "Company successfully deleted" });
    } catch (error) {
        next(error);
    }
};

export default DeleteCompany;
