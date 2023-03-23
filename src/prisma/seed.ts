// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.user.create({
    data: {
      name: 'luffy',
      cpf: '00011122233',
      gender: "male",
      birthdate: new Date('2003-06-21'),
    }
  });

  const post2 = await prisma.user.create({
    data: {
      name: 'zoro',
      cpf: '00011122244',
      gender: "male",
      birthdate: new Date('2001-06-21'),
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
