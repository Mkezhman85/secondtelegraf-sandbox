import { PrismaClient } from '@prisma/client';
import { App } from './app';
import { BotController } from './bot/bot.controller';
import { LoggerService } from './services/logger.service';

async function bootstrap(): Promise<void> {
	const token = process.env.TOKEN;
	if (!token) {
		throw new Error('Не задан токен');
	}
	const app = new App(token, new LoggerService());
	await app.init();
}

bootstrap();
