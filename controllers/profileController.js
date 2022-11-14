const userSchema = require('../modeles/user.modele'); 
const argon2 = require('argon2'); 
const jwt = require("jsonwebtoken"); 
const mongoose = require("mongoose")

// https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/

function verifyJwt(req, res, next){
   
    next()

}

async function profileControl(req, res){
    console.log(req.params.id)
    const user = await userSchema.findOne({_id: mongoose.Types.ObjectId(req.url.params)})
    res.send({message:"ok",
        user : user
})
}


module.exports = {verifyJwt, profileControl}