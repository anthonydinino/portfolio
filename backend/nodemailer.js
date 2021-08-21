const nodemailer = require("nodemailer");
const { google } = require("googleapis");
var dotenv = require("dotenv");

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

module.exports = { sendMail };
