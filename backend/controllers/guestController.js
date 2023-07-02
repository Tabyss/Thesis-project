import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getGuest = async (req, res) => {
  try {
    const guest = await prisma.guest.findMany();
    res.status(200).json(guest);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getGuestById = async (req, res) => {
  try {
    const guest = await prisma.guest.findUnique({
      where: {
        id_tamu: req.params.id, //-> pakai 'number' soalnya idnya integer
      },
    });

    res.status(200).json(guest);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const createGuest = async (req, res) => {
  const { id_tamu, nama_tamu, no_telp, alamat, qrcode, id_undangan } = req.body;
  try {
    const guest = await prisma.guest.create({
      data: {
        id_tamu: id_tamu,
        nama_tamu: nama_tamu,
        no_telp: no_telp,
        alamat: alamat,
        qrcode: qrcode,
        invite: { connect: { id: id_undangan } },
      },
    });
    res.status(201).json(guest);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updateGuest = async (req, res) => {
  const { nama_tamu, no_telp, alamat, qrcode, status, id_undangan } = req.body;
  try {
    const guest = await prisma.guest.update({
      where: {
        id_tamu: req.params.id,
      },
      data: {
        nama_tamu: nama_tamu,
        no_telp: no_telp,
        alamat: alamat,
        qrcode: qrcode,
        status: status,
        id_undangan: id_undangan
      },
    });
    res.status(201).json(guest);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deleteGuest = async (req, res) => {
  try {
    const guest = await prisma.guest.delete({
      where: {
        id_tamu: (req.params.id),
      },
    });
    res.status(201).json(guest);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getGuestByIdTamu = async (req, res) => {
  const { id, id_tamu } = req.params;

  try {
    // Mencari data undangan berdasarkan id
    const undangan = await prisma.invitation.findUnique({
      where: { id: Number(id) },
      include: { tamu: true },
    });

    if (!undangan) {
      return res.status(404).json({ error: 'Undangan tidak ditemukan' });
    }

    // Mencari objek tamu berdasarkan id_tamu di dalam undangan
    const tamu = undangan.tamu.find((item) => item.id_tamu === id_tamu);

    if (!tamu) {
      return res.status(404).json({ error: 'Tamu tidak ditemukan' });
    }

    res.json(tamu);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
};