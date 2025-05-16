import Company from "../../models/Company.js"

const getCompanies = async (req,res,next)=>{
    try {
        
       const getCompany = await Company.find()

       res.status(200).json({
        succes: true ,
        response: getCompany,
       })
       
    } catch (error) {
        next(error)
    }
}

export default getCompanies