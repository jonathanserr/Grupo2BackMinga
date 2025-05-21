import Company from "../../models/Company.js"

const createCompany = async (req,res,next)=>{
    try {
        
        const dataUser = req.user._id
        const dataBody = req.body

        const data = {
            "name": dataBody.name,
            "website": dataBody.website || "no aplica",
            "description": dataBody.description,
            "photo": dataBody.photo,
            "user_id": dataUser
        }

        const company = await Company.create(data)

         return res.status(201).json(
            {
                succes: true,
                message: "Created Author correctly ",
                response: company
            }
        )



    } catch (error) {
        next(error)
    }
}

export default createCompany

