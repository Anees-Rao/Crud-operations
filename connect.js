const mongoose = require("mongoose");

module.exports = () => {
  mongoose.set('strictQuery', true)
  
  const DB_URI= process.env.DB_URI.replace('<DB_PASS>', process.env.DB_PASS)
  .replace('<DB_Name>', process.env.DB_Name)
    mongoose.connect(DB_URI, { useNewUrlParser: true });

  const database = mongoose.connection;

  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log(DB_URI)
    console.log("Database Connected");
  });
};