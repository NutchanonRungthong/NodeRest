require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Hello World Pond");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
