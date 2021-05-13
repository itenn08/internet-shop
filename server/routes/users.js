const express = require("express");
const router = require("express-promise-router")();
const { validateBody, schemas } = require("../helpers/routeHelpers");
const UsersController = require("../controllers/users");
const verify = require("../verifyToken");

router
  .route("/register")
  .post(validateBody(schemas.authSchema), UsersController.register);

router
  .route("/login")
  .post(validateBody(schemas.authSchema), UsersController.login);

router.route("/secret").get(verify, UsersController.secret);

module.exports = router;
