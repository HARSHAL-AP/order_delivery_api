const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const ItemModel = mongoose.model("item", itemSchema);

module.exports = {
  ItemModel,
};
