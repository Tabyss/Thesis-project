import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getEvent = async (req, res) => {
    try {
        const event = await prisma.event.findMany();
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getEventById = async (req, res) => {
    try {
        const event = await prisma.event.findUnique({
            where: {
                id_acara: Number(req.params.id),
              },
        });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createEvent = async (req, res) => {
    const { nama_acara, tgl_acara, jam_mulai, jam_selesai, id_undangan } = req.body;
    try {
        const event = await prisma.event.create ({
            data : {
                nama_acara : nama_acara,
                tgl_acara : tgl_acara,
                jam_mulai : jam_mulai,
                jam_selesai : jam_selesai,
                invite: { connect: { id: id_undangan } },
            },
        });
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateEvent = async (req, res) => {
    const { nama_acara, tgl_acara, jam_mulai, jam_selesai, id_undangan } = req.body;
    try {
        const event = await prisma.event.update ({
            where: {
            id_acara: Number(req.params.id),
            },
            data : {
                nama_acara : nama_acara,
                tgl_acara : tgl_acara,
                jam_mulai : jam_mulai,
                jam_selesai : jam_selesai,
                id_undangan: id_undangan,
            },
        });
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  export const deleteEvent = async (req, res) => {
    try {
      const event = await prisma.event.delete({
        where: {
          id_acara: Number(req.params.id),
        },
      });
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };