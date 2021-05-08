import type { NextApiRequest, NextApiResponse } from 'next'
import {prisma, PrismaClient} from "@prisma/client"

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const prisma = new PrismaClient();
    const data = await prisma.users.findMany();

    res.status(200).json(data);
}