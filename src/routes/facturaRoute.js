const express = require("express");
const facturaschema = require("../models/facturaModel");

const router = express.Router();

// crear facturas
router.post("/facturas", (req, res) => {
  const user = facturaschema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// mostrar todas las facturas
router.get("/facturas", (req, res) => {
  facturaschema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// mostrar solo una factura
router.get("/facturas/:id", (req, res) => {
  const { id } = req.params;
  facturaschema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// eliminar una factura
router.delete("/facturas/:id", (req, res) => {
  const { id } = req.params;
  facturaschema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// modificar una factura
router.put("/facturas/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, ci, plan,addOns,total } = req.body;
  let prueba=[]
  prueba=addOns
  console.log(prueba[1].tipo)
  facturaschema
    .updateOne({ _id: id }, { $set: { nombre, ci, plan,addOns,total } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
