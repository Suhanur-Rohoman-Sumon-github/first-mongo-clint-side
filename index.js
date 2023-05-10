const express = require("express");
const cors = require('cors')
 
const app = express()

app.use(cors())

const port = 5000

app.get('/',(req,res)=>{
    res.send('first mongo is running bro pera nai chill')
})

app.listen(port,()=>{
    console.log(`my first mongo is runing in port ${port}`)
})