const CryptoJS = require("crypto-js");
const User = require("../models/user");
const { signToken } = require("../utils/token");
const { decrypt } = require("../utils/crypto");

module.exports = {
  verifyEmail: async (req, res) => {
    try {
      const email = req.params.email;
      const verifyCode = req.params.verifyCode;
      const decryptEmail = decrypt(email);

      const user = await User.findOne({ email: decryptEmail });

      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User doesn't exist. Please register",
        });
      }

      if (!user.verificationCode) {
        return res
          .status(400)
          .json({ success: false, message: "Your email has been verified" });
      }

      if (verifyCode !== user.verificationCode) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid verification code" });
      }

      user.verificationCode = "";
      await user.save();

      const token = signToken(user);
      res.json({
        success: true,
        token,
      });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, message: "Something wrong" });
    }
  },
};
