import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { wrireStream } from 'src/constants';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    private logger = new Logger('HTTP')
  ) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const errorMsg = (exception as { message: string }).message;
    const errorMsgs = (exception as { messages: string[] }).messages;
    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      msg:
        httpStatus !== HttpStatus.INTERNAL_SERVER_ERROR ? errorMsg : undefined,
      msgs:
        httpStatus !== HttpStatus.INTERNAL_SERVER_ERROR ? errorMsgs : undefined,
    };
    const logError = `${errorMsg}${errorMsgs ? ': ' + errorMsgs : ''}\n`;
    this.logger.error(logError);
    wrireStream.write(`${new Date().toUTCString()}: ${logError}`);
    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
