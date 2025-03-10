const express = require('express');
const mongoose = require('mongoose');

const {collectionUsers} = require("./models/login.model"); 

const app = express();
const port = 2000;


app.set("view engine", "ejs");

app.use(express.static("public"));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {


    const {username, password} = req.body
    console.log(username, password);

    
    const userdata = await collectionUsers({username, password}); 
    await userdata.save()
    console.log(userdata);
});

mongoose.connect("mongodb://127.0.0.1:27017/myDatabase") 
  .then(() => {
    console.log("Connection to DB successful");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
