const express = require("express");

const router = express.Router();
const auth = require("./auth");
const userRouter = require("./userRoute");
const invitationRoute = require("./invitationRoute");
const themeRoute = require("./themeRoute");

router.get("/", (req, res) => {
  res.send("Hello Worlds");
});

router.use("/user", userRouter);
router.use("/", auth);

router.use("/invite", invitationRoute);
router.use("/invite", themeRoute);
module.exports = router;
