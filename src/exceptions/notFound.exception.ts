import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  messages;
  constructor(res) {
    super(res, HttpStatus.NOT_FOUND);
    this.messages = res;
  }
}
