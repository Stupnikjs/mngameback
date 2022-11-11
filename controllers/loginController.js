const { default: mongoose } = require('mongoose');
const userSchema = require('../modeles/user.modele'); 
const argon2 = require('argon2'); 


async function loginControl (req, res){
    const {username, email, password} = req.body

    userinDB = await userSchema.findOne({email: email})
    try{
    const checkPswd = await argon2.verify(userinDB.password, password)
    if(checkPswd) {

        /*
        * Create token 
        */
       
        res.status(200)
        res.send({message: "user authenticated"})


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