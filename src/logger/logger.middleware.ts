import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { wrireStream } from 'src/constants';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;

    const userAgent = request.get('user-agent') || '';

    response.on('finish', () => {
      const { statusCode } = response;
      const commonInfo = `${method} ${originalUrl} ${statusCode} - ${userAgent} ${ip}`;
      const parsedBody = `Body:${JSON.stringify(request.body)}`;
      const dateNow = new Date().toUTCString();
      this.logger.debug(commonInfo);
      if (method !== 'GET') this.logger.debug(parsedBody);
      wrireStream.write(`${dateNow}: ${commonInfo}\n${parsedBody}\n`);
    });

    next();
  }
}
