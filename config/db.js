const mongoose = require("mongoose");


const url =`mongodb+srv://apsundeharshal129:shiv12999@cluster0.03qoowc.mongodb.net/deliveryapi?retryWrites=true&w=majority`
const connection = mongoose.connect(url);

module.exports = {
  connection,
};