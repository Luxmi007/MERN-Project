const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js")
const listingRoutes = require("./routes/listing.js")
const bookingRoutes = require("./routes/booking.js")
const userRoutes = require("./routes/user.js")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/properties", listingRoutes)
app.use("/bookings", bookingRoutes)
app.use("/users", userRoutes)

/* MONGOOSE SETUP */

console.log("Environment variables loaded:", process.env.MONGO_URI, process.env.PORT);
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "mernProject",
  
  })
  .then(() => {
    console.log("Connected to database.");
    app.listen(process.env.PORT, () => console.log( `Server is running at Port: ${process.env.PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
