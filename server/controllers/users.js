const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { sendEmail } = require("../utils/sendEmail");
const { signToken } = require("../utils/token");
const { encrypt } = require("../utils/crypto");

module.exports = {
  register: async (req, res) => {
    const { email, password } = req.value.body;
    const verificationCode = Math.random().toString(36).substring(7);

    const foundUser = await User.findOne({ email });

    if (foundUser) {
      return res.status(400).send({ error: "Email is alredy in use" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .send({ error: "Password must be at least 6 characters" });
    }

    const newUser = new User({
      email,
      password,
      verificationCode,
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    await newUser.save(function (err) {
      if (err) {
        return res.status(500).send({ msg: err.message });
      }

      const cryptoEmail = encrypt(newUser.email);
      const verifyUrl = `http://${req.headers.host}/verify-email/${cryptoEmail}/${newUser.verificationCode}`;

      const mailOptions = {
        from: "itenn@ukr.net",
        to: newUser.email,
        subject: "Confirmation of registration",
        text: `Thank you for registering \n\n Please verify your account. \n ${verifyUrl}`,
      };

      const successMessage = `A verification email has been sent to ${newUser.email}`;

      sendEmail(mailOptions, (err) => {
        res.status(200).send(successMessage);
      });
    });
  },

  login: async (req, res) => {
    const { email, password } = req.value.body;

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return res.status(404).send({ error: "Email is not found" });
    }

    const validPass = await bcrypt.compare(password, foundUser.password);

    if (!validPass) return res.status(400).send("Invalid password");

    const token = signToken(foundUser);

    res.header("auth-token", token).send(token);
    res.send("Logged in");
  },

  secret: async (req, res, next) => {
    console.log("secret is called!");
  },
};
