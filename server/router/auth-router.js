const express = require('express');
const router = express.Router();

// const { home, register } = require("../controller/auth-controller")
const authController = require("../controller/auth-controller")

// router.route("/").get((req, res) => {
//     res.status(200)
//         .send("This is route. of main path so yoiu get it?")
// })

// router.route("/register").get((req, res) => {
//     res.status(200)
//         .send("This is register")
// })
router.route("/").get(authController.home);

// router.route("/register").get(authController.register);
router.route("/register").post(authController.register);

module.exports = router;