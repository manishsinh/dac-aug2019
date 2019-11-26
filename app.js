var express=require("express");
var app=express();
app.listen(3333,()=>{
console.log("server is started!!!");
});
app.get("/",(request,resonce)=>{
    resonce.send("welcome bro!!");
});
app.get("/emp",(request,resonce)=>{
    resonce.send("welcome brooooo!!");
});
app.get("/emps",(request,resonce)=>{
    resonce.send("welcome brooooo!!");
});
