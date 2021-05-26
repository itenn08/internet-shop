const crypto = require("crypto");
const { CRYPTO_SECRET } = require("../config");

const encrypt = (data) => {
  let cipher = crypto.createCipher("aes256", CRYPTO_SECRET);
  let crypted = cipher.update(data, "utf-8", "hex");

  crypted += cipher.final("hex");

  return crypted;
};

const decrypt = (data) => {
  let decipher = crypto.createDecipher("aes256", CRYPTO_SECRET);
  let decrypted = decipher.update(data, "hex", "utf-8");

  decrypted += decipher.final("utf-8");

  return decrypted;
};

module.exports = {
  encrypt,
  decrypt,
};
