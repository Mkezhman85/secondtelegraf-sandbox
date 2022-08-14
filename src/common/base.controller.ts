import { injectable } from 'inversify';
import { ILogger } from '../services/logger.interface';
import { LoggerService } from '../services/logger.service';
import 'reflect-metadata';

@injectable()
export abstract class BaseController {
	constructor(private logger: ILogger) {}
}
