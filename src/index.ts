import { Bot } from './bot';
import { getData } from './services/test.service';

class App {
	async init(): Promise<void> {
		const bot = new Bot();
		bot.botInit();
		console.log('App init...');
		await getData();
	}
}

const app = new App();
app.init();
