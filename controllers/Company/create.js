import Company from "../../models/Company.js"   
const createCompany = async (req,res,next)=>{
    try {
        let newCompany = await Company.create(req.body)
        res.status(201).json({
            success: true,
            company: newCompany
        })
    } catch (error) {
        next(error)
    }
}

export default createCompany