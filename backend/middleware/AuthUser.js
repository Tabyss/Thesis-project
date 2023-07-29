import argon2 from 'argon2';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

export const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon login ke akun anda!" });
  }
  const user = await prisma.user.findFirst({
    where: {
      id: req.session.userId
    }
  });
  if (!user) return res.status(404).json({ msg: "Email Tidak Ditemukan" });
  req.userId = user.id;
  req.role = user.role;
  next();
};

export const adminOnly = async (req, res, next) => {
  const user = await prisma.user.findFirst({
    where: {
      id: req.session.userId
    }
  });
  if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan" });
  if (user.role !== "admin") return res.status(403).json({ msg: "Tidak Mempunyai Akses" });
  next();
}