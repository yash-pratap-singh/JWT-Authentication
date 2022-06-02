require('dotenv').config();

const express=require('express');
const app=express();
const PORT=process.env.PORT||3000;
const mainRouter=require('./routes/main');


// middlewares
app.use(express.json());
app.use(express.static('./public'));

//routes
app.use('/api/v1',mainRouter);

const start= async ()=>{
    try{
    app.listen(PORT,console.log(`Server is Running on PORT ${PORT}`));
    }catch(err){
        console.log(err);
    }
}
start();