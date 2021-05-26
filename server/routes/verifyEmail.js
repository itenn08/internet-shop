const express = require("express");
const router = require("express-promise-router")();
const { verifyEmail } = require("../controllers/verifyEmail");

router.route("/:email/:verifyCode").get(verifyEmail);

module.exports = router;
