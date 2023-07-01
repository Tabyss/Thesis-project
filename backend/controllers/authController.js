// Login user
import argon2 from 'argon2';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Cari pengguna berdasarkan email
    const user = await prisma.user.findUnique({ where: { email } });

    // Jika pengguna tidak ditemukan
    if (!user) {
      return res.status(404).json({ message: 'Email salah' });
    }

    // Verifikasi password menggunakan Argon2
    const passwordMatch = await argon2.verify(user.password, password);

    // Jika password tidak sesuai
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Password salah' });
    }

    // Buat token JWT
    const accessToken = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '15s' }
    );

    const refreshToken = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refresh_token: refreshToken
      },
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      // secure: true, //Jika menggunakan https
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi Kesalahan Saat Login', error });
  }
};

export const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.status(204).end();
  const user = await prisma.user.findFirst({ where: { refresh_token: refreshToken } });
  // Jika pengguna tidak ditemukan
  if (!user) {
    return res.status(404).json({ msg: err.message });
  }
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      refresh_token: null
    },
  });
  
  res.clearCookie('refreshToken');
  return res.status(200).end();
};
