const userSchema = require('../modeles/user.modele'); 


async function updateScore(req, res){
    console.log("ok")
    const game = req.params.game
    console.log(game)
    const id = req.params.id

    let user = await userSchema.findById(id)
    user.scores[game] += 1
    console.log(user)
    await user.save()
    res.status(200)
    res.send({message: "score incrementé "})

    
}


module.exports = {updateScore}



