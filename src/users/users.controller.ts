import { NextFunction, Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error.class';
import { IUserController } from './users.controller.interface';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import 'reflect-metadata';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{ path: '/login', method: 'post', func: this.login },
			{ path: '/register', method: 'post', func: this.register },
			{ path: '/', method: 'get', func: this.returnUser }
		], 'users');
	}

	returnUser(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'User');
	}

	login(req: Request, res: Response, next: NextFunction): void {
		// this.ok(res, 'login');
		console.log('!!');
		next(new HTTPError(401, 'ошибка авторизации', 'login'));
	}


	register(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'register');
	}
}
