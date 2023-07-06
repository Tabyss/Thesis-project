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

export const getDataWanita = async (req, res) => {
    try {
        const dataWanita = await prisma.data_Wanita.findMany();
        res.status(200).json(dataWanita);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getDataWanitaById = async (req, res) => {
    try {
        const dataWanita = await prisma.data_Wanita.findUnique({
            where: {
                id_wanita: Number(req.params.id),
            },
        });
        res.status(200).json(dataWanita);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createDataWanita = async (req, res) => {
    const { nama_lengkap, nama_panggilan, nama_ayah, nama_ibu, instagram, twitter, facebook, id_undangan } = req.body;

    // Mengecek apakah ada file yang diunggah
    if (!req.file || req.file.length === 0) {
        return res.status(400).json({ error: 'Tidak ada gambar yang diunggah' });
    }

    try {
        const imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
        const dataWanita = await prisma.data_Wanita.create({
            data: {
                nama_lengkap: nama_lengkap,
                nama_panggilan: nama_panggilan,
                nama_ayah: nama_ayah,
                nama_ibu: nama_ibu,
                instagram: instagram,
                facebook: facebook,
                twitter: twitter,
                foto_wanita: `images/${req.file.filename}`,
                url_foto: imageUrl,
                invite: { connect: { id: id_undangan } },
            },
        });
        res.status(201).json(dataWanita);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateDataWanita = async (req, res) => {
    const { nama_lengkap, nama_panggilan, nama_ayah, nama_ibu, instagram, twitter, facebook } = req.body;
    try {
        const newImage = req.file;

        // Validasi apakah gambar baru telah diterima
        if (!newImage) {
            return res.status(400).json({ error: 'No new image was uploaded' });
        }

        // Mencari data dari database
        const dataWanita = await prisma.data_Wanita.findUnique({
            where: {
                id_wanita: Number(req.params.id),
            },
        });

        // Hapus gambar lama dari folder public/images menggunakan fs.unlink()
        const oldImage = dataWanita.foto_wanita;
        if (oldImage) {
            const filepath = `./public/${dataWanita.foto_wanita}`;
            fs.unlinkSync(filepath);
        }

        const imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
        const updatedDataWanita = await prisma.data_Wanita.update({
            where: {
                id_wanita: Number(req.params.id),
            },
            data: {
                nama_lengkap: nama_lengkap,
                nama_panggilan: nama_panggilan,
                nama_ayah: nama_ayah,
                nama_ibu: nama_ibu,
                instagram: instagram,
                facebook: facebook,
                twitter: twitter,
                foto_wanita: `images/${req.file.filename}`,
                url_foto: imageUrl,
            },
        });
        res.status(201).json(updatedDataWanita);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const deleteDataWanita = async (req, res) => {
    try {
        const dataWanita = await prisma.data_Wanita.delete({
            where: {
                id_wanita: Number(req.params.id),
            },
        });
        const filepath = `./public/${dataWanita.foto_wanita}`;
        fs.unlinkSync(filepath);

        res.status(201).json(dataWanita);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getDataWanitaByIdUndangan = async (req, res) => {
    const { id_undangan } = req.params;

    try {
        const dataWanita = await prisma.data_Wanita.findFirst({
            where: {
                id_undangan: id_undangan,
            },
        });

        res.status(200).json(dataWanita);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};