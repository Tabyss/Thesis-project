const express = require("express");
const { Me, Login, logOut } = require("../controller/authController.js");

const router = express.Router();

router.get("/me", Me);
router.post("/login", Login);
router.delete("/logout", logOut);

module.exports = router
