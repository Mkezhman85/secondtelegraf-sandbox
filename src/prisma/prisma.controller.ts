import { PrismaClient, Prisma } from '@prisma/client';
import { BaseController } from '../common/base.controller';
import { ILogger } from '../services/logger.interface';
import { LoggerService } from '../services/logger.service';
import { IPrismaController } from './prisma.controller.interface';

export class PrismaController extends BaseController implements IPrismaController {
	prisma: PrismaClient;

	constructor(logger: LoggerService) {
		super(logger);
		this.prisma = new PrismaClient();
	}

	async init(): Promise<void> {
		await this.prisma.$connect();
		this.logger.log('Подключение к базе данных прошло успешно...');
	}
}
