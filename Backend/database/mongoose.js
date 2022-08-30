const mongoose = require("mongoose");

const MONGO_DB_URL = "mongodb://127.0.0.1:27017/calendly-app";

mongoose.connect(MONGO_DB_URL, (err) => {
  if (err) throw err;
  console.log("connected to db");
});
