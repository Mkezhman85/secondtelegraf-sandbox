import { ILogger } from '../services/logger.interface';
import { LoggerService } from '../services/logger.service';

export abstract class BaseController {
	logger!: ILogger;
	constructor(logger: LoggerService) {
		this.logger = logger;
	}
}
