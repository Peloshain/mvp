import { prisma } from "@repo/database";

async function test() {
  const users = await prisma.user.findMany(); // Debería autocompletar 'user'
}
