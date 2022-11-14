const { default: mongoose } = require('mongoose');
const userSchema = require('../modeles/user.modele'); 
const argon2 = require('argon2')




async function signinControl(req, res){
    // check if username and email not already in db 
    const {username, email, password} = req.body
    console.log(username, email)

    const resp1 = await userSchema.find({username: username})

    const resp2 = await userSchema.find({username: username})

    if (resp1[0]=== undefined || resp2[0] === undefined) {
        
        try{
            const hashPassword = await argon2.hash(password)
            const user = await new userSchema({
                _id : new mongoose.Types.ObjectId(), 
                username : req.body.username, 
                password: hashPassword, 
                email: req.body.email
                }); 
                
            await user.save();
            await res.send({message: "user created successfully"})
        } catch(err){
            res.status(404)
            res.send({error: err})
        }
       
    } else {
        res.status(200)
        res.send({message: "user or email already in db"})
    }
}




module.exports = {signinControl}