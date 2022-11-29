const mongoose = require("mongoose");

const facturaschema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  ci: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  addOns: {
    type: Array
  },
  total: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('Factura', facturaschema);