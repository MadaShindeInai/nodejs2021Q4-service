import { MigrationInterface, QueryRunner } from 'typeorm';

export class addAdminUser1642879949992 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "user" VALUES('a2193b13-af16-4f13-9f9c-0b082f1c14e1', 'admin', 'admin', 'admin');`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "user" WHERE LOGIN = 'admin'`);
  }
}
