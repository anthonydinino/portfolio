//TODO serve ./public.index.html using express
//use a

const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.static("../build"));

app.get("/", (req, res) => {
  res.sendFile("../build/index.html");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
