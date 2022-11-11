const express = require("express")
const router = express.Router()
const {signinControl} = require("../controllers/registerController")
const {loginControl} = require("../controllers/loginController")

router.post("/signin", signinControl) 
router.post("/login", loginControl) 





module.exports = router