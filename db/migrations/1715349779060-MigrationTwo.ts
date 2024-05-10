import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationTwo1715349779060 implements MigrationInterface {
    name = 'MigrationTwo1715349779060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "rank" character varying NOT NULL, "salary" integer NOT NULL, "userId" integer, CONSTRAINT "REL_f4b0d329c4a3cf79ffe9d56504" UNIQUE ("userId"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_f4b0d329c4a3cf79ffe9d565047" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_f4b0d329c4a3cf79ffe9d565047"`);
        await queryRunner.query(`DROP TABLE "employee"`);
    }

}
