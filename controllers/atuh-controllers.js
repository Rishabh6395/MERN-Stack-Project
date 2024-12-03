const home = async (req, res) =>{
    try {
        res.status(200).send("This is about page lol")
    } catch (error) {
        console.log(error)
    }
}

const register = async(req, res)=>{
    try {
        res.status(200).send("This is our server")
    } catch (error) {
        res.status(400).send({msg: "page not found!!"})
    }
}

module.exports = { home, register }