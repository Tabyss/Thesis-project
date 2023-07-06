import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";
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

export const getUser = async (req, res) => {
  try {
    const user = await prisma.user.findMany();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        invitation: true,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const createUser = async (req, res) => {
  try {
    const { username, email, password, no_telp, role } = req.body;

    // Jika tidak ada nilai role yang dikirim, set default sebagai "user"
    const userRole = role || "user";

    // Hash password menggunakan Argon2
    const passwordHash = await argon2.hash(password);

    // Simpan data pengguna ke database
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: passwordHash,
        no_telp,
        role: userRole,
      },
    });

    res.status(201).json({ message: "Registrasi Berhasil", user });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export const updateUser = async (req, res) => {
  try {
    const { username, email, password, no_telp, role } = req.body;

    // Jika tidak ada nilai role yang dikirim, set default sebagai "user"
    const userRole = role || "user";

    // Hash password menggunakan Argon2
    const passwordHash = await argon2.hash(password);

    const imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
    const newImage = req.file;

    // Mencari data dari database
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    // Hapus gambar lama dari folder public/images menggunakan fs.unlink()
    const oldImage = user.foto_profile;
    if (oldImage) {
      const filepath = `./public/${user.foto_profile}`;
      fs.unlinkSync(filepath);
    }
    const updatedUser = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        username,
        email,
        password: passwordHash,
        no_telp,
        foto_profile: `images/${req.file.filename}`,
        url_foto: imageUrl,
        role: userRole,
      },
    });
    res.status(201).json({ message: "User Berhasil Diupdate", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Terjadi Kesalahan Saat Mengupdate User", error })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    const filepath = `./public/${user.foto_profile}`;
    fs.unlinkSync(filepath);

    res.status(201).json({ message: "User Berhasil Dihapus", user });
  } catch (error) {
    res.status(500).json({ message: "Terjadi Kesalahan Saat Menghapus User", error });
  }
};
