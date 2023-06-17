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
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const createUser = async (req, res) => {
  try {
    const { username, email, password, no_telp, foto_profile, role } = req.body;

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
        foto_profile,
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
    const { username, email, password, no_telp, foto_profile, role } = req.body;
    
    // Jika tidak ada nilai role yang dikirim, set default sebagai "user"
    const userRole = role || "user";

    // Hash password menggunakan Argon2
    const passwordHash = await argon2.hash(password);
    const user = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        username,
        email,
        password: passwordHash,
        no_telp,
        foto_profile,
        role: userRole,
      },
    });
    res.status(201).json({message: "User Berhasil Diupdate", user});
  } catch (error) {
    res.status(500).json({message: "Terjadi Kesalahan Saat Mengupdate User", error})
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(201).json({message: "User Berhasil Dihapus" ,user });
  } catch (error) {
    res.status(500).json({ message: "Terjadi Kesalahan Saat Menghapus User", error });
  }
};
