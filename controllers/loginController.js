const { default: mongoose } = require('mongoose');
const userSchema = require('../modeles/user.modele'); 
const argon2 = require('argon2'); 
const jwt = require("jsonwebtoken")


async function  createJwt(user, key, algorithmString){
    const token = jwt.sign(
        {
        username: user.username,
        email: user.email
        }, 
        key, 
        {
        algorithm: algorithmString, 
        expiresIn: "1h"
        })
        return token

}



async function loginControl (req, res){
    const {username, email, password} = req.body

    userinDB = await userSchema.findOne({email: email})
    try{
    const checkPswd = await argon2.verify(userinDB.password, password)
    if(checkPswd) {

        /*
        * Create token 
        */
        const token = await createJwt(userinDB, "secretkeytest", "HS256")
       
        /*
        const today = new Date()

        const cookieOption = {
            secure : true, 
            httpOnly: true, 
            expires: today.setHours(today.getHours()+ 2)
        }
        */

        res.status(200)
        res.send({message: "user authenticated",
                    userid: userinDB._id, 
                    token : token
    })


    } else {
        res.status(200)
        res.send({message:"wrong password"})
    }
    } catch(err){
        res.status(404)
        res.send({error: err})
    }
    

}


module.exports = {loginControl}