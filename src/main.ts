import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { BotController } from './bot/bot.controller';
import { LoggerService } from './services/logger.service';
import { ILogger } from './services/logger.interface';
import { TYPES } from './types';
import { PrismaController } from './prisma/prisma.controller';
import { IBootstrapReturn } from './common/bootstrapreturn.interface';

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService);
	bind<BotController>(TYPES.BotController).to(BotController);
	bind<PrismaController>(TYPES.PrismaController).to(PrismaController);
	bind<App>(TYPES.Application).to(App);
});

function bootstrap(): IBootstrapReturn {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();
	return { app, appContainer };
}

export const { app, appContainer } = bootstrap();
