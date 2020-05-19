// SET UP THE PROJECT
const express = require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const app=express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));


// DATABASE CONNECTION
const url="mongodb://127.0.0.1:27017/User_DB";
mongoose.connect(url,{useNewUrlParser:true});
const db=mongoose.connection;
db.once('open',function(){
    console.log("Database Connected.");
});

const userSchema=new mongoose.Schema({
    email:String,
    password:String
});
const UserDB=mongoose.model("User",userSchema);

// HOME ROUTE
app.get("/",function(req,res){
    res.render("home");
});
//LOGIN ROUTE
app.get("/login",function(req,res){
    res.render("login");
  });
//REGISTER ROUTE
app.get("/register",function(req,res){
     res.render("register");
});

// REGISTER POST FUNCTION
app.post("/register",function(req,res){
    const form_email=req.body.email;
    const form_password=req.body.password;
    // Create new User
    const newuser=new UserDB({
        email:form_email,
        password:form_password
    })
    newuser.save();
    res.render('myaccount')
});

// LOGIN POST FUNCTION
app.post("/login",function(req,res){
    const form_email=req.body.email;
    const form_password=req.body.password;
    UserDB.findOne({email: form_email},function(err,foundItem){
        if(!err){
            // if user does not exists, rediresct to signup page
            if(!foundItem){
                res.render("register");
            }
            // if user exists, render to the user (Account) page
            else{
                if(form_password === foundItem.password){
                    res.render("myaccount"); 
                }
            }
        }
    });
});

app.listen(3000,function(){
    console.log("Server is Running on 3000");
});