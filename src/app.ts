import 'reflect-metadata';
import { ILogger } from './services/logger.interface';
import { injectable, inject } from 'inversify';
import { TYPES } from './types';
import { IBotService } from './bot/bot.service.interface';
import { IServerService } from './server/server.interface';

@injectable()
export class App {
	constructor(
		@inject(TYPES.BotService) private bot: IBotService,
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.ServerService) private serverService: IServerService,
	) {}

	public async init(): Promise<void> {
		await this.serverService.init();
		await this.bot.init();
	}
}
