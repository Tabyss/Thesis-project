const model = require("../models/index");
const argon2 = require("argon2");

const { User } = model;

const getUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ["ID_User", "Nama_User", "Email", "No_Telp", "Role"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getUsersById = async (req, res) => {
  try {
    const response = await User.findOne({
      attributes: ["ID_User", "Nama_User", "Email", "No_Telp", "Role"],
      where: { ID_User: req.param.id },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createUsers = async (req, res) => {
  const { Nama_User, Email, No_Telp, Password, confPassword, Role } = req.body;
  if (Password !== confPassword)
    return res.status(400).json({ msg: "Password can't use" });

  const hashPassword = await argon2.hash(Password);
  try {
    await User.create({
      Nama_User: Nama_User,
      Email: Email,
      No_Telp: No_Telp,
      Password: hashPassword,
      Role: Role,
    });
    res.status(201).json({ msg: "register done" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const updateUsers = async (req, res) => {
  const user = await User.findOne({
    where: {
      ID_User: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not Found" });
  const { Nama_User, Email, No_Telp, Password, confPassword, Role } = req.body;
  let hashPassword;
  if (Password === "" || Password === null) {
    hashPassword = user.Password;
  } else {
    hashPassword = await argon2.hash(Password);
  }

  if (Password !== confPassword)
    return res.status(400).json({ msg: "Password and confirm" });
  try {
    await user.update(
      {
        Nama_User: Nama_User,
        Email: Email,
        No_Telp: No_Telp,
        Password: hashPassword,
        Role: Role,
      },
      {
        where: {
          ID_User: user.id,
        },
      }
    );
    res.status(200).json({ msg: "update done" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteUsers = async (req, res) => {
  const user = await User.findOne({
    where: {
      ID_User: req.params.id,
    },
  });

  if (!user) return res.status(400).json({ msg: "user not found" });
  try {
    await User.destroy({
      where: {
        ID_User: user.ID_User,
      },
    });
    res.status(200).json({ msg: "delete done" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  getUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
};
