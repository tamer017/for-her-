const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: false,
  },nreviews: {
    type: Number,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("product", productSchema);

