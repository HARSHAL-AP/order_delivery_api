const express = require("express");
const { VehicleModel } = require("../models/vehicle.model");
const vehicleRoute = express.Router();

vehicleRoute.get("/get", async (req, res) => {
  try {
    const data = await VehicleModel.find();
    res.status(200).json({
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

vehicleRoute.post("/create", async (req, res) => {
  const {
    vehicleType,
    city,
    registration_number
} = req.body;
  try {
    const vehicleStatus=await VehicleModel.find({registration_number:registration_number})
    if(vehicleStatus.length!==0){
      res.status(201).json({
        isError: true,
        message: "Vehicle Allready Present with given Registration Number ...",
      
      });
    }
    else{
      const data = new VehicleModel({
        vehicleType,
        city,
        registration_number
    } );
      await data.save();
      res.status(201).json({
        isError: false,
        message: "New Vehicle Added To database....",
        data,
      });
    }
    
  } catch (error) {
    res.status(500).json({
      isError: true,
      error,
    });
  }
});

vehicleRoute.get("/get/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await VehicleModel.findById({ _id: id });
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

vehicleRoute.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  try {
    const data = await VehicleModel.findByIdAndUpdate({ _id: id }, payload);
    res.status(201).json({
      isError: false,
      message: "Vehicle Updated ...",
      data,
    });
  } catch (error) {
    res.status(500).json({
      isError: true,
      error,
    });
  }
});


vehicleRoute.delete("/delet/:id",async(req,res) => {
    const id = req.params.id;
    try {
        await VehicleModel.findByIdAndDelete({ _id: id });
    
        res.status(201).json({
          isError: false,
          message: "Vehicle Removed From Database....",
        });
      } catch (error) {
        res.status(500).json({
          isError: true,
          error,
        });
      }
})





module.exports = {
  vehicleRoute,
};
