//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["Buy food", "Get recipe", "Cook food", "Eat food"];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {

    // let today = new Date();
    // let options = {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long"
    // };

    // let day = today.toLocaleDateString("en-US", options);

    //send day of week to list.ejs
    res.render("list", {
        listTitle: day,
        newListItems: items
    });
});

app.get("/work", function(req, res) {
    res.render("list", {
        listTitle: "Work List", 
        newListItems: workItems})
});

app.post("/", function(req, res){

    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

//post new item to list and redirect to work route
app.get("/work", function(){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function(req, res){
    res.render("about");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});