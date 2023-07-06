import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";
import fs from "fs";
import mime from "mime-types";

const prisma = new PrismaClient();

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./public/images");
    },
    filename: function (req, file, cb) {
        cb(
            null,
            path.parse(file.originalname).name + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

const fileFilter = (req, file, cb) => {
    const mimeType = mime.lookup(file.originalname);

    if (mimeType && mimeType.startsWith("image/")) {
        cb(null, true); // Gambar diterima
    } else {
        cb(new Error("Hanya file PNG, JPG, dan JPEG yang diizinkan!"), false); // Gambar ditolak
    }
};

export const upload = multer({
    storage, 
    fileFilter, 
    limits: {
        fileSize: 8 * 1024 * 1024, // 8 MB
    },
});

export const getCouple = async (req, res) => {
    try {
        const couple = await prisma.couple.findMany();
        res.status(200).json(couple);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getCoupleById = async (req, res) => {
    try {
        const couple = await prisma.couple.findUnique({
            where: {
                id_pasangan: Number(req.params.id), //-> pakai 'number' soalnya idnya integer
            },
            include: {
                data_pria: true,
                data_wanita: true,
                gallery: true,
            },
        });
        res.status(200).json(couple);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createCouple = async (req, res) => {
    const { foto_cover, judul_kutipan, isi_kutipan, id_undangan } = req.body;

    // Mengecek apakah ada file yang diunggah
    if (!req.file || req.file.length === 0) {
        return res.status(400).json({ error: 'Tidak ada gambar yang diunggah' });
    }

    try {
        const imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;

        const couple = await prisma.couple.create({
            data: {
                foto_cover: `images/${req.file.filename}`,
                url_foto: imageUrl,
                judul_kutipan: judul_kutipan,
                isi_kutipan: isi_kutipan,
                invite: { connect: { id: id_undangan } },
            },
        });
        res.status(201).json(couple);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateCouple = async (req, res) => {
    const { foto_cover, judul_kutipan, isi_kutipan, id_undangan } = req.body;
    try {
        const imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
        const newImage = req.file;

        // Validasi apakah gambar baru telah diterima
        if (!newImage) {
            return res.status(400).json({ error: 'No new image was uploaded' });
        }

        // Mencari data dari database
        const couple = await prisma.couple.findUnique({
            where: {
                id_pasangan: Number(req.params.id), //-> pakai 'number' soalnya idnya integer
            },
        });

        // Hapus gambar lama dari folder public/images menggunakan fs.unlink()
        const oldImage = couple.foto_cover;
        if (oldImage) {
            const filepath = `./public/${couple.foto_cover}`;
            fs.unlinkSync(filepath);
        }

        const updatedCouple = await prisma.couple.update({
            where: {
                id_pasangan: Number(req.params.id), //-> pakai 'number' soalnya idnya integer
            },
            data: {
                foto_cover: `images/${req.file.filename}`,
                url_foto: imageUrl,
                kutipan: kutipan,
                id_undangan: id_undangan,
            },
        });

        res.status(201).json(updatedCouple);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const deleteCouple = async (req, res) => {
    try {
        const couple = await prisma.couple.delete({
            where: {
                id_pasangan: Number(req.params.id),
            },
        });

        const filepath = `./public/${couple.foto_cover}`;
        fs.unlinkSync(filepath);

        res.status(201).json(couple);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getCoupleByIdUndangan = async (req, res) => {
    const { id_undangan } = req.params;

    try {
        const couple = await prisma.couple.findFirst({
            where: {
                id_undangan: id_undangan,
            },
        });

        res.status(200).json(couple);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};