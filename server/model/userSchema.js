
const mongoose =require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
 
 
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    referral:{
        type:String 
       
    },
    city:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true  
            }
        }
    ],
    instagram:{
        type:String 
    },
    youtube:{
        type:String 
       
    },
    blog:{
        type:String 
       
    },
    Genre:{
        
        beauty:String,
        fashion:String,
        tech:String,
        lifestyle:String,
        food:String,
        travel:String,
        fitness:String,
        wedding:String,
        entertainment:String,
        decor:String,
        parenting:String,
        photography :String,
        design: String, 
        culture: String,
        sports: String,
        luxury: String,
        repost: String,
        diy: String
    }
})

userSchema.pre('save',async function(next){
     if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password,10)
        this.cpassword =await bcrypt.hash(this.cpassword,10)

    }
     next();
});

// we are genrating toke 

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens= this.tokens.concat({token:token})
        await this.save();
        return token
    }
    catch(err){
        console.log(err);
    }

}

const User = mongoose.model('USERLOGIN',userSchema);
 
module.exports= User;