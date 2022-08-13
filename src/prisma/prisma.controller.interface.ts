import { PrismaClient } from '@prisma/client';

export interface IPrismaController {
	prisma: PrismaClient;
	init: (prisma: PrismaClient) => void;
}
