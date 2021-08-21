const express = require("express");
const { sendMail } = require("./nodemailer");

const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("../build"));
app.use(express.json());

app.post("/contact", (req, res) => {
  let name = req.body.name;
  let message = req.body.message;
  sendMail(name, message)
    .then(() => console.log("Email sent..."))
    .catch((error) => console.log(error.message));
  res.json({ received: { name, message } });
});

app.get("*", (req, res) => {
  res.status(200).sendFile(path.resolve("../build/index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
