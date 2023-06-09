import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getInvitation = async (req, res) => {
  try {
    const invite = await prisma.invitation.findMany();
    res.status(200).json(invite);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getInvitationById = async (req, res) => {
  try {
    const invite = await prisma.invitation.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        tamu: true,
        acara: true,
        pasangan: true,
        tema: true
      },
    });
    res.status(200).json(invite);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const createInvitation = async (req, res) => {
  const { name_pria, name_wanita, tgl_nikah } = req.body;
  try {
    const invite = await prisma.invitation.create({
      data: {
        name_pria: name_pria,
        name_wanita: name_wanita,
        tgl_nikah: tgl_nikah,
      },
    });
    res.status(201).json(invite);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updateInvitation = async (req, res) => {
  const { name_pria, name_wanita, tgl_nikah } = req.body;
  try {
    const invite = await prisma.invitation.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name_pria: name_pria,
        name_wanita: name_wanita,
        tgl_nikah: tgl_nikah,
      },
    });
    res.status(201).json(invite);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deleteInvitation = async (req, res) => {
  try {
    const invite = await prisma.invitation.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(201).json(invite);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
