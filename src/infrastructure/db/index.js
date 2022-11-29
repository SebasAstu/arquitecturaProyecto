const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("../../adapter/out/routes/facturaRoute");


const app = express();
const port = process.env.PORT || 8000;


app.use(express.json());
app.use("/api", userRoute);


app.get("/", (req, res) => {
  res.send("Welcome to my API");
});


mongoose
  .connect('mongodb://localhost:27017/proyectoArqui')
  .then(() => console.log("Coexion establecida a Mongodb"))
  .catch((error) => console.error(error));


app.listen(port, () => console.log("Servidor ejecutandose en el puerto:", port));
