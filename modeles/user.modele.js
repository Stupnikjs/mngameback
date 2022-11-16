const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id : mongoose.Types.ObjectId, 
    username : String, 
    password : String, 
    email: String,
    scores: {
        tictactoe: Number, 
        chess : Number, 
    } 
})


module.exports = mongoose.model("User", userSchema);
