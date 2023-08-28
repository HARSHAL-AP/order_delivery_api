const express = require("express");
const { ItemModel } = require("../models/item.model");
const itemRoute = express.Router();

itemRoute.get("/get", async (req, res) => {
  try {
    const data = await ItemModel.find();
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

itemRoute.post("/create", async (req, res) => {
  const { name, price } = req.body;
  try {
    const newItem = new ItemModel({ name, price });
    await newItem.save();
    res.status(201).json({
      isError: false,
      message: "New Item Added To database....",
      newItem,
    });
  } catch (error) {
    res.status(500).json({
      isError: true,
      error,
    });
  }
});

itemRoute.get("/get/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await ItemModel.findById({ _id: id });

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

itemRoute.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  try {
    const data = await ItemModel.findByIdAndUpdate({ _id: id }, payload);
    const update = await ItemModel.findById({ _id: id });
    res.status(201).json({
      isError: false,
      message:"Item Updated ...",
      update,
    });
  } catch (error) {
    res.status(500).json({
      isError: true,
      error,
    });
  }
});

itemRoute.delete("/delet/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ItemModel.findByIdAndDelete({ _id: id });

    res.status(201).json({
      isError: false,
      message: "Item Deleted From Database....",
    });
  } catch (error) {
    res.status(500).json({
      isError: true,
      error,
    });
  }
});
module.exports = {
  itemRoute,
};
