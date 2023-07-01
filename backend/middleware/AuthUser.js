import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

export const authMiddleware = async (req, res, next) => {

  // Periksa apakah header Authorization ada
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Tidak ada token. Akses ditolak.' });
  }

  // Verifikasi dan decode token
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Tambahkan objek user dan role ke req untuk digunakan di route selanjutnya
    req.userId = decoded.id;
    req.role = decoded.role;

    // Lanjutkan eksekusi middleware selanjutnya
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export const adminMiddleware = (req, res, next) => {
  console.log(req.role);
  if (req.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }

  next();
};