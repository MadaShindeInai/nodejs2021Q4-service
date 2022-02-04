import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationException extends HttpException {
  messages;
  constructor(res: string[]) {
    super(res, HttpStatus.BAD_REQUEST);
    this.messages = res;
  }
}
