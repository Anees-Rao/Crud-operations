const express=require("express");
const app=express();
const userRouter=require("./routes/routes")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());
app.use("/api", userRouter);
require("dotenv").config();
require("./connect")();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is runnning on port ${PORT}`);
  });