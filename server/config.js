require("dotenv/config");

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  SMTP_USERNAME: process.env.SMTP_USERNAME,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  CRYPTO_SECRET: process.env.CRYPTO_SECRET,
};
