import api from './api/api.ts';
import prisma from './utils/prisma.ts';

console.info(`Main loaded`)

const main = async () => {
  api();
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect()
    process.exit(1)
  });
