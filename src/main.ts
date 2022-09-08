import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { BotService } from './bot/bot.service';
import { LoggerService } from './services/logger.service';
import { ILogger } from './services/logger.interface';
import { TYPES } from './types';
import { IBootstrapReturn } from './common/bootstrapreturn.interface';
import { ConfigService } from './config/config.service';
import { IConfigService } from './config/config.service.interface';
import { PrismaService } from './database/prisma.service';
import { ServerService } from './server/server.service';
import { UserController } from './subjects/users/user.controller';
import { ExeptionFilter } from './errors/exeption.filter';
import { IUserService } from './subjects/users/users.service.interface';
import { UserService } from './subjects/users/users.service';
import { UsersRepository } from './subjects/users/users.repository';
import { IUsersRepository } from './subjects/users/users.repository.interface';
import { ICityController } from './subjects/cities/city.controller.interface';
import { CityController } from './subjects/cities/city.controller';
import { ICityService } from './subjects/cities/city.service.interface';
import { CityService } from './subjects/cities/city.service';
import { ICityRepository } from './subjects/cities/city.repository.interface';
import { CityRepository } from './subjects/cities/city.repository';
import { IPromotionController } from './subjects/promotions/promotion.controller.interface';
import { PromotionController } from './subjects/promotions/promotion.controller';
import { IPromotionService } from './subjects/promotions/promotion.service.interface';
import { PromotionService } from './subjects/promotions/promotion.service';
import { IPromotionRepository } from './subjects/promotions/promotion.repository.interface';
import { PromotionRepository } from './subjects/promotions/promotion.repository';
import { ITopicController } from './subjects/topics/topic.controller.interface';
import { ITopicService } from './subjects/topics/topic.service.interface';
import { ITopicRepository } from './subjects/topics/topic.repository.interface';
import { TopicController } from './subjects/topics/topic.controller';
import { TopicService } from './subjects/topics/topic.service';
import { TopicRepository } from './subjects/topics/topic.repository';

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService);
	bind<BotService>(TYPES.BotService).to(BotService);
	bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
	bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope();
	bind<ServerService>(TYPES.ServerService).to(ServerService).inSingletonScope();
	bind<ExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter).inSingletonScope();
	bind<UserController>(TYPES.UserController).to(UserController).inSingletonScope();
	bind<IUserService>(TYPES.UserService).to(UserService).inSingletonScope();
	bind<IUsersRepository>(TYPES.UsersRepository).to(UsersRepository).inSingletonScope();
	bind<ICityController>(TYPES.CityController).to(CityController).inSingletonScope();
	bind<ICityService>(TYPES.CityService).to(CityService).inSingletonScope();
	bind<ICityRepository>(TYPES.CityRepository).to(CityRepository).inSingletonScope();
	bind<IPromotionController>(TYPES.PromotionController).to(PromotionController).inSingletonScope();
	bind<IPromotionService>(TYPES.PromotionService).to(PromotionService).inSingletonScope();
	bind<IPromotionRepository>(TYPES.PromotionRepository).to(PromotionRepository).inSingletonScope();
	bind<ITopicController>(TYPES.TopicController).to(TopicController).inSingletonScope();
	bind<ITopicService>(TYPES.TopicService).to(TopicService).inSingletonScope();
	bind<ITopicRepository>(TYPES.TopicRepository).to(TopicRepository).inSingletonScope();
	bind<App>(TYPES.Application).to(App);
});

async function bootstrap(): Promise<IBootstrapReturn> {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	await app.init();
	return { app, appContainer };
}

export const boot = bootstrap();
