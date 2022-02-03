const express = require("express");
const { body } = require("express-validator/check");

const userController = require("../controllers/user");
const User = require("../models/user");

const router = express.Router();

// /auth/signup
router.put(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("E-Mail address already exists!");
          }
        });
      })
      .normalizeEmail(),
  ],
  userController.signup
);

// /auth/login
router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .normalizeEmail(),
  ],
  userController.login
);

module.exports = router;
