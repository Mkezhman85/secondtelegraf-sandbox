import { Telegraf } from 'telegraf';

export interface IBotController {
	bot: Telegraf;
	init: () => void;
	getToken: () => string;
}
