const express = require("express");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
var dotenv = require("dotenv");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("../build"));
app.use(express.json());

dotenv.config({ path: "../.env" });
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAUth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAUth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (name, message) => {
  try {
    const accessToken = await oAUth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "anthonydininobusiness@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "Business ✉️ <anthonydininobusiness@gmail.com>",
      to: "adinino1996@gmail.com",
      subject: "PORTFOLIO - CONTACT EMAIL",
      text: `Name: ${name} Message: ${message}`,
      html: `
        <h1>Someone has sent you a message from your portfolio! </h1>
        </br>
        <h2>Name:</h2><p>${name}</p>
        <h2>Message:</h2><p>${message}</p>
        </br>
      `,
    };
    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

app.post("/contact", (req, res) => {
  let name = req.body.name;
  let message = req.body.message;
  console.log(process.env);

  sendMail(name, message)
    .then((result) => console.log("Email sent...", result))
    .catch((error) => console.log(error.message));
  res.json({ received: { name, message } });
});

app.get("*", (req, res) => {
  res.status(200).sendFile(path.resolve("../build/index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
