import  { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    
    await prisma.users.create({
        data:{
            firstname: "Anthony"
        }
    })

    await prisma.users.create({
        data:{
            firstname: "Laurent"
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