import 'dotenv/config';
import { Markup, Telegraf } from 'telegraf';

export class Bot {
	botInit(): void {
		console.log('Bot initialized...');
		const token: string | undefined = process.env.TOKEN;
		if (!token) {
			throw new Error('Не задан токен!');
		}
		const bot = new Telegraf(token);
		bot.command('image', (ctx) => {
			ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' });
		});
		bot.action('Ok', (ctx) => {
			console.log(ctx.callbackQuery.data);
		});
		bot.command('markup', (ctx) => {
			ctx.replyWithMarkdown('*Text*');
			ctx.reply('Markup reply!!!', {
				reply_markup: {
					inline_keyboard: [[{ text: 'Text', callback_data: 'Ok' }]],
				},
			});
		});
		// bot.command('test', (ctx) => {
		// 	ctx.reply('Test text.....', Markup.keyboard(['/1', '2']).oneTime().resize());
		// });

		// bot.on('text', (ctx) => {
		// 	ctx.reply(ctx.message.text);
		// });
		bot.launch();
	}
}
