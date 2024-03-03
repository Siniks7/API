import { Logger, type ILogObj } from 'tslog';
import { type ILogger } from './logger.interface';
import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export class LoggerService implements ILogger {
	public logger: Logger<ILogObj>;

	constructor () {
		this.logger = new Logger({
			hideLogPositionForProduction: true
		});
	}

	log (...args: unknown[]): void {
		this.logger.info(...args);
	}

	error (...args: unknown[]): void {
		// отправка в sentry / rollbar
		this.logger.error(...args);
	}

	warn (...args: unknown[]): void {
		this.logger.warn(...args);
	}
}
