const model = require("../models/index");
const argon2 = require("argon2");

const { Invitation, Theme } = model;

const createTheme = async (req, res) => {
  const { Theme_Undangan, Font_Primary, Font_Secondary, Backsound } = req.body;
  try {
    await Invitation.create({
      Theme_Undangan: Theme_Undangan,
      Font_Primary: Font_Primary,
      Font_Secondary: Font_Secondary,
      Backsound: Backsound,
    });
    res.status(201).json({ msg: "register done" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteInvitation = async (req, res) => {
};

module.exports = {
  createTheme,
//   deleteInvitation,
};
