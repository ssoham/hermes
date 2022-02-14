require('dotenv').config()

let nodemailer = require("nodemailer");
let sesTransport = require('nodemailer-ses-transport');

// ses transporter
let transporter = nodemailer.createTransport(sesTransport({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
}));

// send email given json, requires callback
// probably use bluebird to handle async with Promise.all
transporter.sendMail(
  {
    from: "rbhogavilli@gmail.com",
    to: ["sohamsinha2016@gmail.com"],
    subject: "email subject",
    text: "email body"
  },
  (err, info) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(info.envelope);
        console.log(info.messageId);
    }
  }
);