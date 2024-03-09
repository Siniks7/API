import { HTTPError } from '../errors/http-error.class';
import { IMiddleware } from './middleware.interface';
import { NextFunction, Request, Response } from 'express';

export class GuardMiddleware implements IMiddleware {

	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.user) {
			next();  
		} else {
			next(new HTTPError(401, 'Ошибка авторизации', 'login'));
		}	
	}
}