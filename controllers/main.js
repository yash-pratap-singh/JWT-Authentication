require('dotenv').config();
const jwt=require('jsonwebtoken');

const login=async(req,res)=>{
    const {username, password}=req.body;
    if(!username||!password)
    {
        console.log('No Username and pwd');
        return res.status(400).json({msg:"Username and Password are required"});
    }

    const id= new Date().getDate();
    const token= jwt.sign({username,id},process.env.JWT_SECRET,{expiresIn:'60s'});
    res.status(200).json({msg:'user created', token});
}

const dashboard=async(req,res)=>{
    const luckyNumber=Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello ${req.person.username}`,secret:`Here is your authorized data, your lucky Number is ${luckyNumber}`});
    
}

module.exports={login,dashboard};