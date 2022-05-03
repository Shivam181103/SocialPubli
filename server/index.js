const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
 
dotenv.config()
const app = express();
// const U ser = require('./model/userSchema')
app.use(express.json())
app.use(require('./router/auth')) 
app.use(require('./router/signin')) 

const DB =process.env.MONGO_LINK 
mongoose.connect(DB).then( ()=>{ 
    console.log('fullfiled') 
}) 
.catch((err)=>{
    console.log('no connect')   
})
const middleware =(req,res,next)=>{
    console.log('this is middleware')
    next()
}

 
 
app.get('/',middleware,(req,res) => { 
    console.log('middleware work successfully')
    res.send('hello world from the server');
})

app.listen(5000, ()=>{
    console.log('listening successfully on 5000')
}) 