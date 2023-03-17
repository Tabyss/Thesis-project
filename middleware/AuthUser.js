const models = require("../models/index.js");

const { User, Invitation } = models

export const AdminOnly = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      id: req.session.ID_User,
    },
  });
  if (!User) return res.status(404).json({ msg: "User not found" });
  if (user.Role !== "admin") return res.status(403).json({ msg: "staff only" });
  next();
};
