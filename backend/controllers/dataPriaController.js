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

export const getDataPria = async (req, res) => {
    try {
        const dataPria = await prisma.dataPria.findMany();
        res.status(200).json(dataPria);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getDataPriaById = async (req, res) => {
    try {
        const dataPria = await prisma.dataPria.findUnique({
            where: {
                id_pria: Number(req.params.id),
            },
        });
        res.status(200).json(dataPria);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createDataPria = async (req, res) => {
    const { nama_lengkap, nama_panggilan, nama_ayah, nama_ibu, instagram, twitter, facebook, id_pasangan } = req.body;

    // Mengecek apakah ada file yang diunggah
    if (!req.file || req.file.length === 0) {
        return res.status(400).json({ error: 'Tidak ada gambar yang diunggah' });
    }

    try {
        const dataPria = await prisma.dataPria.create({
            data: {
                nama_lengkap: nama_lengkap,
                nama_panggilan: nama_panggilan,
                nama_ayah: nama_ayah,
                nama_ibu: nama_ibu,
                instagram: instagram,
                facebook: facebook,
                twitter: twitter,
                foto_pria: `images/${req.file.filename}`,
                id_pasangan: id_pasangan,
            },
        });
        res.status(201).json(dataPria);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateDataPria = async (req, res) => {
    const { nama_lengkap, nama_panggilan, nama_ayah, nama_ibu, instagram, twitter, facebook, id_pasangan } = req.body;
    try {
        const newImage = req.file;

        // Validasi apakah gambar baru telah diterima
        if (!newImage) {
            return res.status(400).json({ error: 'No new image was uploaded' });
        }

        // Mencari data dari database
        const dataPria = await prisma.dataPria.findUnique({
            where: {
                id_pria: Number(req.params.id),
            },
        });

        // Hapus gambar lama dari folder public/images menggunakan fs.unlink()
        const oldImage = dataPria.foto_pria;
        if (oldImage) {
            const filepath = `./public/${dataPria.foto_pria}`;
            fs.unlinkSync(filepath);
        }

        const updatedDataPria = await prisma.dataPria.update({
            where: {
                id_pria: Number(req.params.id),
            },
            data: {
                nama_lengkap: nama_lengkap,
                nama_panggilan: nama_panggilan,
                nama_ayah: nama_ayah,
                nama_ibu: nama_ibu,
                instagram: instagram,
                facebook: facebook,
                twitter: twitter,
                foto_pria: `images/${req.file.filename}`,
                id_pasangan: id_pasangan,
            },
        });
        res.status(201).json(updatedDataPria);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const deleteDataPria = async (req, res) => {
    try {
        const dataPria = await prisma.dataPria.delete({
            where: {
                id_pria: Number(req.params.id),
            },
        });
        const filepath = `./public/${dataPria.foto_pria}`;
        fs.unlinkSync(filepath);

        res.status(201).json(dataPria);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};