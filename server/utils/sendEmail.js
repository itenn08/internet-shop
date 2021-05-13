const nodemailer = require("nodemailer");
const { SMTP_USERNAME, SMTP_PASSWORD } = require("../config");

const sendEmail = (mailOptions, callback) => {
  let transporter = nodemailer.createTransport({
    service: "ukrnet",
    host: "smtp.ukr.net",
    port: 465,
    secure: true,
    auth: {
      user: SMTP_USERNAME,
      pass: SMTP_PASSWORD,
    },
  });

  transporter.sendMail(mailOptions, callback);
};

module.exports = {
  sendEmail,
};
