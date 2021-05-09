import  { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/utils/auth';
const prisma = new PrismaClient();

async function main() {

    await prisma.users.create({
        data:{
            email: "admin@admin.fr",
            password: await hashPassword('admin')
        }
    })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })