const model = require("../models/index");
const argon2 = require("argon2");

const { User } = model;

const Login = async (req, res) => {
  const user = await User.findOne({
    where: {
      Email: req.body.Email,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  const match = await argon2.verify(user.Password, req.body.Password);
  if (!match) return res.status(400).json({ msg: " Wrong Pass" });
//   req.session.id = user.ID_User;
  const ID_User = user.ID_User;
  const Nama_User = user.Nama_User;
  const Email = user.Email;
  const No_Telp = user.No_Telp;
  const Role = user.Role;
  res.status(200).json({ ID_User, Nama_User, Email, No_Telp, Role });
};

const Me = async (req, res) => {
  if (!req.session.ID_User) {
    return res.status(401).json({ msg: "please login with correct account" });
  }
  const user = await User.findOne({
    attributes: ["ID_User", "Nama_User", "Email", "No_Telp", "Role"],
    where: {
      ID_User: req.session.ID_User,
    },
  });
  if (!User) return res.status(404).json({ msg: "User not found" });
  res.status(200).json(user);
};

const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "cant log out" });
    res.status(200).json({ msg: "you has log out" });
  });
};

module.exports = {
  Login,
  Me,
  logOut,
};
