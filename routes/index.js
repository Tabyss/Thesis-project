const express = require("express");

const router = express.Router();
const userRouter = require("./userRoute");
const auth = require("./auth");
const invitationRoute = require("./invitationRoute");

router.get("/", (req, res) => {
  res.send("Hello Worlds");
});

router.use("/user", userRouter);
router.use("/", auth);

router.use("/invite", invitationRoute);
module.exports = router;
