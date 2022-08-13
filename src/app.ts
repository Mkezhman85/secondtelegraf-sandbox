import { PrismaClient } from '@prisma/client';
import { BotController } from './bot/bot.controller';
import { PrismaController } from './prisma/prisma.controller';
import { ILogger } from './services/logger.interface';
import { LoggerService } from './services/logger.service';
import { getData } from './services/test.service';

export class App {
	prisma: PrismaController;
	bot: BotController;
	token: string;
	logger: ILogger;

	constructor(token: string, logger: ILogger) {
		this.prisma = new PrismaController(new LoggerService());
		this.token = token;
		this.bot = new BotController(this.token, new LoggerService());
		this.logger = logger;
	}

	public async init(): Promise<void> {
		this.logger.log('Приложение запущено...');
		await this.prisma.init();
		// await getData();
		await this.bot.init();
	}
}
