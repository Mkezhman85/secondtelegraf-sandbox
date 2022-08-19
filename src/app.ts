import { BotController } from './bot/bot.controller';
import { PrismaController } from './prisma/prisma.controller';
import { ILogger } from './services/logger.interface';
import { getData } from './services/test.service';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { TYPES } from './types';
import { IConfigService } from './config/config.service.interface';

@injectable()
export class App {
	constructor(
		@inject(TYPES.BotController) private bot: BotController,
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.PrismaController) private prisma: PrismaController,
		@inject(TYPES.ConfigService) private configService: IConfigService,
	) {}

	public async init(): Promise<void> {
		this.loggerService.log('Приложение запущено...');
		await this.prisma.init();
		await getData();
		await this.bot.init();
	}
}
