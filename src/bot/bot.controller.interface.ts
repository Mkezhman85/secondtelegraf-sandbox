import { Telegraf } from 'telegraf';

export interface IBotController {
	bot: Telegraf;
	token: string;
	init: () => void;
}
