const express = require("express");
const { connection } = require("./config/db");

const { vehicleRoute } = require("./routes/vehicle.route");
const { userRoute } = require("./routes/user.route");
const { itemRoute } = require("./routes/item.route");
const { orderRoute } = require("./routes/order.route");

const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", async(req, res) => {
  try {
   
    res.status(200).json({
      isError: false,
      message: "Welcome To Delivery Api ...."
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

app.use("/user", userRoute);
app.use("/item", itemRoute);
app.use("/vehicle", vehicleRoute);
app.use("/order", orderRoute);

app.listen(3001, async () => {
  try {
    await connection;
    console.log("Connected To DB");
  } catch (error) {
    console.log("Unable TO Connect Db");
    console.log(error);
  }
});
