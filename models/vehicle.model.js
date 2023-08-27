const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
  registration_number: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9]*$/,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  active_order_count: {
    type: Number,
    default:0,
    min: 0,
    max: 2,
  },
  isDelivered: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const VehicleModel = mongoose.model("Vehicle", vehicleSchema);

module.exports = {
  VehicleModel,
};
