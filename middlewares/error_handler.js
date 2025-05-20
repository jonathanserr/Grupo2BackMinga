
const error_handler = (error, req, res, next) => {
    return res.status(500).json(
        {
            succes: false,
            message: "error interno del servidor ",
            response: error
        }
    )
}
export default error_handler