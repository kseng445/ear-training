const express = require("express");
const path = require("path");
require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json());

app.listen(port, () => {
  console.log("Server listening on port", port);
});
