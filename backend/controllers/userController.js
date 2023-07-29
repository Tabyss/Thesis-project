import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";

const prisma = new PrismaClient();

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

    // Cek apakah email sudah terdaftar di database
    const checkEmail = await prisma.user.findUnique({
      where: { email },
    });

    // Jika email sudah terdaftar, kirimkan respons bahwa email sudah digunakan
    if (checkEmail) {
      return res.status(400).json({ msg: "Email sudah digunakan." });
    }

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

    res.status(201).json({ msg: "Registrasi Berhasil", user });
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

    const updateUser = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        username,
        email,
        password: passwordHash,
        no_telp,
        role: userRole,
      },
    });
    res.status(201).json({ msg: "User Berhasil Diupdate", updateUser });
  } catch (error) {
    res.status(500).json({ msg: "Terjadi Kesalahan Saat Mengupdate User", error })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(201).json({ msg: "User Berhasil Dihapus", user });
  } catch (error) {
    res.status(500).json({ msg: "Terjadi Kesalahan Saat Menghapus User", error });
  }
};
