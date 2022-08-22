const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");
// console.log(date());
const app = express();
const items=["buy food","cook food","eat food"];
const workItems=[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res) {

let day=date.getDate();
  res.render("list", {listTitle: day,newListItems:items});
});
app.post("/",function(req,res){
  let item=req.body.newitem;
  // console.log(req.body);
  if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
})
app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List" ,newListItems:workItems});
});
app.get("/about",function(req,res){
  res.render("about");
})

app.listen(process.env.PORT || 3000, function() {
  console.log("server is live on port 3000");
})
