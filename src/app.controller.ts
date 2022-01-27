import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello! To see api documentation check swagger on http://localhost:4000/doc';
  }
}
