const mongoose = require("mongoose");

const counterSchema = mongoose.Schema({
 
  sequence_value:Number
});

const CounterModel = mongoose.model("counter", counterSchema);

module.exports = {
  CounterModel,
};
