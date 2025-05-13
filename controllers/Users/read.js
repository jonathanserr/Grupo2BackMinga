import user from "../../models/User.js";

const AllUsers = async (req, res,next) => {
    try {
        let queryParams = req.query
        console.log(queryParams)
        let { email} = req.query
        let query = {}

        if (email) {
           
            query.email = {$regex: email , $options: "i"}
        } console.log("query por email")
       

        const Users = await user.find(query);
        res.json(Users);
    } catch (error) {
       next(error)
    }
};



export default AllUsers