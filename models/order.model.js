const mongoose = require("mongoose");

const { CounterModel } = require("./counter.model");

const orderSchema = mongoose.Schema({
  orderNumber: {
    type: Number,
    unique: true,
  },
  item_id: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  delivery_vehicle_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
});


const OrderModel = mongoose.model("order", orderSchema);

module.exports = {
  OrderModel,
};