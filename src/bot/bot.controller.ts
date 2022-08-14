import 'dotenv/config';
import { Markup, Scenes, Telegraf } from 'telegraf';
import { IMyContext } from './sessions.interface';
import LocalSession from 'telegraf-session-local';
import { BaseController } from '../common/base.controller';
import { LoggerService } from '../services/logger.service';
import { IBotController } from './bot.controller.interface';
const { leave, enter } = Scenes.Stage;
import { ILogger } from '../services/logger.interface';
import { TYPES } from '../types';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';

@injectable()
export class BotController extends BaseController implements IBotController {
	bot: Telegraf;

	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bot = new Telegraf(this.getToken());
	}

	getToken(): string {
		const token = process.env.TOKEN;
		if (!token) {
			throw new Error('Не задан токен');
		}
		return token;
	}

	init(): void {
		try {
			const testScene = new Scenes.BaseScene<IMyContext>('test');

			testScene.enter((ctx) => {
				ctx.reply('Привет!!!');
			});

			testScene.command('back', leave<IMyContext>());

			testScene.on('text', (ctx) => {
				ctx.reply(ctx.message.text);
			});

			testScene.leave((ctx) => {
				ctx.reply('Пока!!!');
			});

			const stage = new Scenes.Stage<IMyContext>([testScene]);

			const bot = new Telegraf<IMyContext>(this.getToken());

			bot.use(new LocalSession({ database: 'session.json' }).middleware());

			bot.use(stage.middleware());

			bot.use((ctx, next) => {
				ctx.session.myProp;
				ctx.scene.session.myProps;
				next();
			});

			bot.command('test', (ctx) => {
				ctx.scene.enter('test');
			});

			bot.launch();

			this.loggerService.log(`[${this.bot.context.botInfo?.first_name}] Бот успешно запущен...`);
		} catch (err: any) {
			this.loggerService.error(err.message);
		}
	}
}
