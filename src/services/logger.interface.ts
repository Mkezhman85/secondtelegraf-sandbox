import { Logger } from 'tslog';

export interface ILogger {
	logger: unknown;
	log: (...args: unknown[]) => void;
	error: (...args: unknown[]) => void;
	warn: (...args: unknown[]) => void;
	trace: (...args: unknown[]) => void;
	silly: (...args: unknown[]) => void;
	debug: (...args: unknown[]) => void;
	fatal: (...args: unknown[]) => void;
}
