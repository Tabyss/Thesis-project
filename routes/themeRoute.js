const express = require("express");
const { createTheme } = require("../controller/themeController");

const router = express.Router();

router.post("/", createTheme);

module.exports = router;
