const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/health", (req, res) => {
  res.send("halo, the endpoint is healthy!!!!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
