const express = require("express")
const PORT = process.env.port || 5000
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const routes = require("./routes/Todorouter")
const path = require('path')
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log(`connected to mongodb...`))
.catch((err)=>console.log(err))
app.use(routes)
app.use(express.static(path.join(__dirname,'./frontend/build')))

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'./frontend/build/index.html'))
});

app.listen(PORT,()=>console.log(`server is listening on ${PORT}`))