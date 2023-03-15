const express = require('express')
const {
  getUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../controller/userController");

const router = express.Router();


router.get("/", getUsers);
router.get("/:id", getUsersById);
router.post("/", createUsers);
router.patch("/:id", updateUsers);
router.delete("/:id", deleteUsers);

module.exports = router