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
  try {
    const { nama_tamu, alamat, no_telp, id_undangan } = req.body;
    const id_tamu = uuid(); // Generate unique ID for guest

    // Get the url_undangan from the Invitation model
    const invitation = await prisma.invitation.findUnique({
      where: {
        id: id_undangan
      },
      select: {
        url_undangan: true
      }
    });

    if (!invitation) {
      return res.status(404).json({ error: "Invitation not found" });
    }

    // Create the guest record with the link_undangan value
    const guest = await prisma.guest.create({
      data: {
        id_tamu,
        nama_tamu,
        alamat,
        no_telp,
        id_undangan
      }
    });

    res.status(200).json({ guest });
  } catch (error) {
    res.status(500).json({ error: "Failed to create guest" });
  }
};


export const getGuestByIdUndangan = async (req, res) => {
  const { id_undangan } = req.params;

  try {
    const guests = await prisma.guest.findMany({
      where: {
        id_undangan: id_undangan,
      },
    });

    res.status(200).json(guests);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};