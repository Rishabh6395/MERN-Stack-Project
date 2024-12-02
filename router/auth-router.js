const express = require("express")
const router = express.Router()


router.get("/", (req, res)=>{
    res.status(200).send("This is our server")
})

router.get("/about", (req, res)=>{
    res.status(200).send("This is about page lol")
})

router.route("/register").get((req, res)=>{
    res.send(200).send("THis is our register app")
})

module.exports = router;
