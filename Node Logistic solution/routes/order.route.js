const express = require("express");
const { OrderModel } = require("../models/order.model");
const { VehicleModel } = require("../models/vehicle.model");
const { ItemModel } = require("../models/item.model");
const { userauthonticate } = require("../middleware/authonticate.middleware");
const { CounterModel } = require("../models/counter.model");
const orderRoute = express.Router();

orderRoute.get("/get", async (req, res) => {
  try {
    const data = await OrderModel.find();
    res.status(201).json({
      isError: false,
      data,
    });
  } catch (error) {
    res.status(500).json({
      isError: true,
      error,
    });
  }
});

orderRoute.get("/get/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await OrderModel.findById({ _id: id });
    res.status(201).json({
      isError: false,
      data,
    });
  } catch (error) {
    res.status(500).json({
      isError: true,
      error,
    });
  }
});

orderRoute.post("/create", userauthonticate, async (req, res) => {
  const { user_id, item_id, city } = req.body;
  try {
    const item = await ItemModel.findById(item_id);
    const data = await CounterModel.find();
    console.log(data);
    const vehicle = await VehicleModel.findOneAndUpdate(
      {
        city: city,
        active_order_count: { $lt: 2 },
      },
      { $inc: { active_order_count: 1 } },
      { new: true }
    );
    console.log(vehicle);
    if (vehicle) {
      const order = new OrderModel({
        orderNumber: data[0].sequence_value,
        item_id,
        price: item.price,
        customer_id: user_id,
        delivery_vehicle_id: vehicle._id,
      });
      await order.save();
      res.status(201).json({
        isError: false,
        message: "Order Accepted.",
        order: order,
      });
      let updatecounter = await CounterModel.findByIdAndUpdate(
        { _id: data[0]._id },
        { sequence_value: data[0].sequence_value + 1 }
      );
    } else {
      res.status(401).json({
        isError: true,
        message:
          "Service not available in your city now. Please try again later.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      isError: true,
      error: error.message,
    });
  }
});

orderRoute.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { isDelivered } = req.body;
  try {
    const order = await OrderModel.findById({ _id: id });
    const update = await OrderModel.findByIdAndUpdate(
      { _id: id },
      { isDelivered: isDelivered }
    );
    if (isDelivered) {
      const vehicle = await VehicleModel.findByIdAndUpdate(
        { _id: order.delivery_vehicle_id },
        { active_order_count: 0, active_order_count: false }
      );
    }
    res.status(201).json({
      isError: false,
      message: "Order Status Updated ...",
    });
  } catch (error) {
    res.status(500).json({
      isError: true,
      error,
    });
  }
});

module.exports = {
  orderRoute,
};
