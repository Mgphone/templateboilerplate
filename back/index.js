const express = require("express");
const app = express();
const port = 9000;
app.get("/", (req, res) => {
  res.send("Hello,Express Mother father daddy okay");
});
app.listen(port, () => {
  console.log(`Sever is listening on port ${port}`);
});
