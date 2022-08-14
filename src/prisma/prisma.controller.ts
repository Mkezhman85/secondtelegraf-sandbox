import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { BaseController } from '../common/base.controller';
import { ILogger } from '../services/logger.interface';
import { TYPES } from '../types';
import { IPrismaController } from './prisma.controller.interface';
import 'reflect-metadata';

@injectable()
export class PrismaController extends BaseController implements IPrismaController {
	prisma: PrismaClient;

	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.prisma = new PrismaClient();
	}

	async init(): Promise<void> {
		await this.prisma.$connect();
		this.loggerService.log('Подключение к базе данных прошло успешно...');
	}
}
