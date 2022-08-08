import { Bot } from './bot';

class App {
	async init(): Promise<void> {
		const bot = new Bot();
		bot.botInit();
		console.log('App init...');
	}
}

const app = new App();
app.init();
