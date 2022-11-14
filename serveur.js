const express = require('express');
const app = express();  
const mongoose = require('mongoose')
const dotenv = require('dotenv'); 
const router = require("./routers/router")
const cookieParser = require("cookie-parser")
const cors = require("cors")

app.use(cors())
app.use(cookieParser())


dotenv.config();
mongoose.connect(process.env.DB_CONFIG, ()=> {
    console.log("DB connected")
})

app.use(express.json())
app.use(express.urlencoded({ extended: true}))



app.use("/", router)





app.listen( process.env.PORT || 4646, () => {
    console.log(`connected on port ${process.env.PORT || 4646}`)
})


