const express = require("express");
const app = express();

const morgan = require("morgan");

const PORT = process.env.PORT || 8000;

require("./database/mongoose");

app.use(express.json());

app.use(morgan("combined"));

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log("listening to port", PORT);
});
