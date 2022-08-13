import 'dotenv/config';
import { Markup, Scenes, Telegraf } from 'telegraf';
import { IMyContext } from './sessions.interface';
import LocalSession from 'telegraf-session-local';
import { BaseController } from '../common/base.controller';
import { LoggerService } from '../services/logger.service';
import { IBotController } from './bot.controller.interface';
const { leave, enter } = Scenes.Stage;

export class BotController extends BaseController implements IBotController {
	bot: Telegraf;
	token: string;

	constructor(token: string, logger: LoggerService) {
		super(logger);
		this.token = token;
		this.bot = new Telegraf(this.token);
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

			const bot = new Telegraf<IMyContext>(this.token);

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

			this.logger.log(`[${this.bot.context.botInfo?.first_name}] Бот успешно запущен...`);
		} catch (err: any) {
			this.logger.error(err.message);
		}
	}
}
