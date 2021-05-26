const JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const signToken = (user) => {
  return JWT.sign(
    {
      _id: user._id,
      email: user.email,
    },
    JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );
};

module.exports = {
  signToken,
};
