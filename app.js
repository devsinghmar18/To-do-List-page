const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = ["Buy Food","Cook Food","Eat Food"];
let workItems =[];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    
var today = new Date();
var currentDay = today.getDay();
 

var options = {
    weekday:"long",
    day:"numeric",
    month:"long",
};

var day = today.toLocaleDateString("en-US",options);

// switch (currentDay) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;        
                                        
//     default:
//     console.log("Eroor: current day is eqaul to: "+ currentDay);
// }

res.render("list", {listTitle: day, newListItems: items});

});

app.post("/",function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.get("/work",function(req,res){
    res.render("list",{listTitle: "work list",newListItems: items})
});

app.post("/work",function(req,res){
   let item = req.body.newItem;
   workItems.push(item);
   res,redirect("/work");
});

app.listen(3000,function(){
    console.log("Server is running at port 3000");
});