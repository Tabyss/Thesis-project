// Login user
import argon2 from 'argon2';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

export const Login = async (req, res) => {
  const { email, password } = req.body;

  // Validasi apakah email dan password ada di permintaan
  if (!email && !password) {
    return res.status(400).json({ msg: 'Silahkan Masukkan Email dan Password Terlebih Dahulu' });
  }
  if (!email) {
    return res.status(400).json({ msg: 'Silahkan Masukkan Email Terlebih Dahulu' });
  }
  if (!password) {
    return res.status(400).json({ msg: 'Silahkan Masukkan Password Terlebih Dahulu' });
  }

  // Cari pengguna berdasarkan email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(404).json({ msg: 'Email/Password Tidak Ditemukan' });
  }

  const passwordMatch = await argon2.verify(user.password, password);
  if (!passwordMatch) return res.status(400).json({ msg: 'Email/Password Tidak Ditemukan' });
  req.session.userId = user.id;
  const id = user.id;
  const username = user.username;
  const role = user.role;
  res.status(200).json({ id, username, email, role });
};

export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon login ke akun anda!" });
  }
  const user = await prisma.user.findFirst({
    where: {
      id: req.session.userId
    }
  });
  if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan" });
  res.status(200).json(user);
}

export const Logout = (req, res) => {
  // Menghapus sesi pengguna
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Tidak Dapat Logout" });
    res.status(200).json({ msg: "Anda Telah Logout" });
  });
};
