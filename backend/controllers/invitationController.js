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
        id: req.params.id,
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

export const getInvitationByUrl = async (req, res) => {
  try {
    const invite = await prisma.invitation.findFirst({
      where: {
        url_undangan: req.params.id,
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
  const { nama_pria, nama_wanita, tgl_nikah, url_undangan, id_user } = req.body;
  
  try {
    const invite = await prisma.invitation.create({
      data: {
        nama_pria: nama_pria,
        nama_wanita: nama_wanita,
        tgl_nikah: tgl_nikah,
        url_undangan: url_undangan,
        user: { connect: { id: id_user } }, // Menghubungkan Invitation dengan pengguna berdasarkan ID pengguna
      },
    });
    
    res.status(201).json(invite);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateInvitation = async (req, res) => {
  const { nama_pria, nama_wanita, tgl_nikah, url_undangan } = req.body;
  try {
    const invite = await prisma.invitation.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        nama_pria: nama_pria,
        nama_wanita: nama_wanita,
        tgl_nikah: tgl_nikah,
        url_undangan: url_undangan,
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

export const getInvitationByIdUser = async (req, res) => {
  const id_user = parseInt(req.params.id_user);
  try {
    const invite = await prisma.invitation.findMany({
      where: {
        id_user: id_user,
      },
    });
    res.status(200).json(invite);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
