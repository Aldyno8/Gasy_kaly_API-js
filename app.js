const express = require("express");
const mongoose = require("mongoose");
const recipeRoutes = require("./routes/recipes-routes");
const authRoutes = require("./routes/user-routes")
const app = express();

mongoose
  .connect(
    "mongodb+srv://ghost_8:katsaka2.0@cluster0.ztms8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.error("Connexion à MongoDB échouée !", err));

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("api/recipes/", recipeRoutes);
app.use("api/auth/", authRoutes);

module.exports = app;
