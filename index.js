const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const bcrypt = require("bcrypt");


const app = express();
const port = 3000;










app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const productRoute = require('./routes/product.route');
app.use('/api/products', productRoute);


app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});


const users = [
  { id: 1, name: "RAM!", age: "2" },
  { id: 2, name: "ALAM!", age: "25" },
  { id: 3, name: "Haitam", age: "22" }
];


app.get('/young', (req, res) => {
  const youngUsers = users.filter(user => parseInt(user.age) <= 21);
  res.json(youngUsers);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  res.json(user || { error: "Utilisateur non trouvé" });
});

app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({ error: "Utilisateur non trouvé" });
  }
});

mongoose.connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("Connection to DB successful");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
