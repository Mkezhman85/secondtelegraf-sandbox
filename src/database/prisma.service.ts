import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { ILogger } from '../services/logger.interface';
import { TYPES } from '../types';

@injectable()
export class PrismaService {
	client: PrismaClient;

	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		this.client = new PrismaClient();
	}

	async connect(): Promise<void> {
		try {
			await this.client.$connect();
			this.logger.log('[PrismaService] Успешно подключились к базе данных');
		} catch (err) {
			if (err instanceof Error) {
				this.logger.error('[PrismaService] Ошибка подключения к базе данных: ', err.message);
			}
		}
	}

	async disconnect(): Promise<void> {
		await this.client.$disconnect();
		this.logger.warn('[PrismaService] Отключение от базы данных');
	}
}
