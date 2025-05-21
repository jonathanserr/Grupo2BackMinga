import Company from "../../models/Company.js"

const UpdateCompany = async (req,res,next)=>{
    try {
        const idCompany = req.params.idCompany

       const data = req.body
       
         const updatedCompany = await Company.findOneAndUpdate(
            { _id: idCompany },
            data,
            { new: true }
        );

        res.status(200).json(
            {
                succes:true, 
                response: updatedCompany
            }
        )
    } catch (error) {
        next(error)
    }
}

export default UpdateCompany