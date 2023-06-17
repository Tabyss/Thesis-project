import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.status(401);
        const user = await prisma.user.findMany({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user) return res.status(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.status(403);
            const userId = user.id;
            const username =user.username;
            const email = user.email;
            const accessToken = jwt.sign({userId, username, email}, 
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15s' }
            );
            res.json({ accessToken });
        });
    } catch (error) {
        
    }
}