const express = require("express");
const path = require("path");
const hbs = require("hbs");

const port = process.env.PORT || 8000;
const app = express();

//path directory
const staticpath = path.join(__dirname , "../public");
console.log(staticpath);

//setting viewing engine
app.set("view engine","hbs");

//setting view path 
const template_path = path.join(__dirname,"../templates/views");
const  partials_path = path.join(__dirname,"../templates/partials");
app.set('views',template_path);
hbs.registerPartials(partials_path);
//Routing
app.use(express.static(staticpath));

app.get("",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404page",{
        errorMsg:"Oops ! Page not found"
    });
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})