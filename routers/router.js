const express = require("express")
const router = express.Router()
const {signinControl} = require("../controllers/registerController")
const {loginControl} = require("../controllers/loginController")
const {verifyJwt, profileControl} = require("../controllers/profileController")
const {updateScore} = require("../controllers/gameController")

router.post("/signin", signinControl) 
router.post("/login", loginControl) 
router.get("/profile/:id", verifyJwt, profileControl)
router.post("/:id/:game", updateScore)



module.exports = router