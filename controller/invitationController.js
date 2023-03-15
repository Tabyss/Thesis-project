const model = require("../models/index");
const argon2 = require("argon2");

const { Invitation, User } = model;

const getInvitation = async (req, res) => {
  try {
    const response = await Invitation.findAll({
      attributes: [
        "ID_Undangan",
        "ID_Tema",
        "Nama_Pria",
        "Nama_Wanita",
        "Tgl_Nikah",
        "ID_Harga",
        "ID_Pasangan",
        "ID_Acara",
        "ID_Tamu",
        "ID_User",
      ],
      include: [
        {
          model: User,
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getInvitationById = async (req, res) => {
  try {
    const response = await Invitation.findOne({
      attributes: [
        "ID_Tema",
        "Nama_Pria",
        "Nama_Wanita",
        "Tgl_Nikah",
        "ID_Harga",
        "ID_Pasangan",
        "ID_Acara",
        "ID_Tamu",
        "ID_User",
      ],
      where: { id: req.param.ID_Undangan },
      include: [
        {
          model: User,
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createInvitation = async (req, res) => {
  const {
    Nama_Pria,
    Nama_Wanita,
    Tgl_Nikah,
  } = req.body;
  try {
    await Invitation.create({
      Nama_Pria : Nama_Pria,
      Nama_Wanita : Nama_Wanita,
      Tgl_Nikah:Tgl_Nikah,
    });
    res.status(201).json({ msg: "register done" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteInvitation = async (req, res) => {
  const invitation = await Invitation.findOne({
    where: {
      ID_Undangan: req.params.id,
    },
  });

  if (!invitation) return res.status(400).json({ msg: "invitation not found" });
  try {
    await User.destroy({
      where: {
        id: invitation.ID_Undangan,
      },
    });
    res.status(200).json({ msg: "delete done" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  getInvitation,
  getInvitationById,
  createInvitation,
  deleteInvitation,
};
