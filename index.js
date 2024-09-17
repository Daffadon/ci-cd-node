const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/health", (req, res) => {
  res.send("halo, the endpoint is healthy!!!! (second update)");
});
app.get("/ci-cd", (req, res) => {
  res.send("ci-cd is working fine");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
