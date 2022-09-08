import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const city = {
	name: 'Кострома',
};

const users = [
	{ email: 'kostromaUser9@mail.ru', name: 'Иванkostroma', password: 'Q!123456' },
	{ email: 'kostromaUser10@mail.ru', name: 'Иванkostroma', password: 'Q!123456' },
	{ email: 'kostromaUser11@mail.ru', name: 'Иванkostroma', password: 'Q!123456' },
	{ email: 'kostromaUser12@mail.ru', name: 'Иванkostroma', password: 'Q!123456' },
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function main() {
	await prisma.$connect();

	const createdCity = await prisma.cityModel.create({ data: city });

	await prisma.userModel.createMany({ data: users.map((u) => ({ ...u, cityId: createdCity.id })) });

	await prisma.$disconnect();
}

main();
