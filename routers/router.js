const express = require("express")
const router = express.Router()
const {signinControl} = require("../controllers/registerController")
const {loginControl} = require("../controllers/loginController")
const {verifyJwt, profileControl} = require("../controllers/profileController")


router.post("/signin", signinControl) 
router.post("/login", loginControl) 
router.get("/profile/:id", verifyJwt, profileControl)




module.exports = router