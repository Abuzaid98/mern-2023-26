const home = async (req, res) => {
    try {
        res.status(200).send("<h2>Welcom to the home page, from controller</h2>")
    } catch (error) {
        console.log(error, "This is predefindede error")
    }
}
const register = async (req, res) => {
    try {
        // res.status(200).send("Welcom to the register page, from controller")
        console.log(req.body)
        res.status(200).json({message: req.body})
    } catch (error) {
        console.log(error, "This is predefindede error")
    }
}

module.exports = { home, register }