import { FastifyApp } from '../types';

export class Logger {
  readonly app: FastifyApp;

  constructor({ app }: Pick<Logger, 'app'>) {
    this.app = app;
    this.app.addHook('preHandler', (req, _, done) => {
      if (req.body) {
        this.app.log.info({ body: req.body }, 'parsed body');
      }
      done();
    });
  }

  public info(message: string): void {
    this.app.log.info(message);
  }

  public error(message: string): void {
    this.app.log.error(message);
  }
}
