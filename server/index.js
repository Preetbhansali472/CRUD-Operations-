const express=require('express')
const mongoose=require('mongoose')
const app=express()


app.use(express.json());

mongoose.connect("mongodb+srv://preet:Preet1234@crud.knzxh.mongodb.net/Students?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
    }
);

app.get('/',async (req,res)=>{
    res.send("Database Connected");
    console.log("Database Connected");

});

app.listen(3001,()=>{
    console.log('Server running on 3001...');
});