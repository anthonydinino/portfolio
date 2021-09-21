const express = require("express");
const { sendMail } = require("./nodemailer");

const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

//import router
const projectRouter = require("./projects");
app.use("/projects", projectRouter);

const dbRouter = require("./db");
app.use("/db", dbRouter);

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "current", "build")));

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
  fs.access(path.join(__dirname, "current"), (error) => {
    if (error) {
      res
        .status(200)
        .sendFile(path.resolve(path.join(__dirname, "build", "index.html")));
    } else {
      res
        .status(200)
        .sendFile(
          path.resolve(path.join(__dirname, "current", "build", "index.html"))
        );
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
