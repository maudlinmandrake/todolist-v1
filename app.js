//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    //what day of the week is it?
    if (currentDay === 6 || currentDay === 0) {
        day = "Weekend";
    } else {
        day = "Weekday!"
    }
    //sned day of week to list.ejs
    res.render("list", {kindOfDay: day});
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});