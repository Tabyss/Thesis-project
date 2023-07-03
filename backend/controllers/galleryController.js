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

export const getGallery = async (req, res) => {
    try {
        const gallery = await prisma.gallery.findMany();
        res.status(200).json(gallery);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getGalleryById = async (req, res) => {
    try {
        const gallery = await prisma.gallery.findUnique({
            where: {
                id_gallery: Number(req.params.id),
            },
        });
        res.status(200).json(gallery);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createGallery = async (req, res) => {
    const { foto, id_pasangan } = req.body;

    // Mengecek apakah ada file yang diunggah
    if (!req.file || req.file.length === 0) {
        return res.status(400).json({ error: 'Tidak ada gambar yang diunggah' });
    }

    try {
        const imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;

        const gallery = await prisma.gallery.create({
            data: {
                // foto: req.file.filename,
                foto: imageUrl,
                id_pasangan: id_pasangan,
            },
        });
        res.status(201).json(gallery);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateGallery = async (req, res) => {
    const { foto, id_pasangan } = req.body;

    try {
        const newImage = req.file;

        // Validasi apakah gambar baru telah diterima
        if (!newImage) {
            return res.status(400).json({ error: 'No new image was uploaded' });
        }

        // Mencari data dari database
        const gallery = await prisma.gallery.findUnique({
            where: {
                id_gallery: Number(req.params.id),
            },
        });

        // Hapus gambar lama dari folder public/images menggunakan fs.unlink()
        const oldImage = gallery.foto;
        if (oldImage) {
            const filepath = `./public/${gallery.foto}`;
            fs.unlinkSync(filepath);
        }

        const imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;

        const updatedGallery = await prisma.gallery.update({

            where: {
                id_gallery: Number(req.params.id),
            },
            data: {
                foto: imageUrl,
                id_pasangan: id_pasangan
            },
        });
        res.status(201).json(updatedGallery);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const deleteGallery = async (req, res) => {
    try {
        const gallery = await prisma.gallery.delete({
            where: {
                id_gallery: Number(req.params.id),
            },
        });
        const filepath = `./public/${gallery.foto}`;
        console.log('Filepath:', filepath);
        fs.unlinkSync(filepath);

        res.status(201).json({ message: 'Gallery deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};