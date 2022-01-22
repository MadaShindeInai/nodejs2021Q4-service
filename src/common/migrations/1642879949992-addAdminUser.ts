import { MigrationInterface, QueryRunner } from 'typeorm';

export class addAdminUser1642879949992 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "user" (id, "name", login, "password") VALUES('a2193b13-af16-4f13-9f9c-0b082f1c14e1', 'admin', 'admin', '$2b$10$ENenM33Q6ufPAfrydJCsp.irP15rYnMgYzDFiBc8ZEyrvfFQjyRE2');`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "user" WHERE LOGIN = 'admin'`);
  }
}
