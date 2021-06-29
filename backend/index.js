//TODO serve ./public.index.html using express
//use a

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("../build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("../build/index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
