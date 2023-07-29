// Login user
import argon2 from 'argon2';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

export const Login = async (req, res) => {
  const { email, password } = req.body;

<<<<<<< HEAD
<<<<<<< HEAD
    const passwordMatch = await argon2.verify(user.password, req.body.password);
<<<<<<< HEAD
    if (!passwordMatch) return res.status(400).json({msg: "Wrong Username/Password"});
=======
    if (!passwordMatch) return res.status(400).json({msg: "Email/Password Tidak Ditemukan"});
>>>>>>> 2dbbf24 (Fixing)
    req.session.userId = user.id;
    const id = user.id;
    const username = user.username;
    const email = user.email;
    const role =user.role;
    res.status(200).json({id, username, email, role})
=======
=======
>>>>>>> f31f7f66cae67366c464fcd6efeba7a71bc527f1
  // Validasi apakah email dan password ada di permintaan
  if (!email && !password) {
    return res.status(400).json({ msg: 'Email dan Password harus diisi!' });
  }
  if (!email) {
    return res.status(400).json({ msg: 'Email harus diisi!' });
  }
  if (!password) {
    return res.status(400).json({ msg: 'Password harus diisi!' });
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
<<<<<<< HEAD
>>>>>>> 10eae1f (Login Validation, fix idtamu tamulist)
=======
>>>>>>> f31f7f66cae67366c464fcd6efeba7a71bc527f1
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
