//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy food", "Get recipe", "Cook food", "Eat food"];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function (req, res) {

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    //send day of week to list.ejs
    res.render("list", {
        kindOfDay: day,
        newListItems: items
    });
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});