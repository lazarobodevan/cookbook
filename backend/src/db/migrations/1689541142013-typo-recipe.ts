import { MigrationInterface, QueryRunner } from "typeorm";

export class TypoRecipe1689541142013 implements MigrationInterface {
    name = 'TypoRecipe1689541142013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_9fc16b7d8ed87a15a35e8966f77"`);
        await queryRunner.query(`ALTER TABLE "comments" RENAME COLUMN "recipieId" TO "recipeId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_d2faca4b7c1a5875d6c997f7666" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_d2faca4b7c1a5875d6c997f7666"`);
        await queryRunner.query(`ALTER TABLE "comments" RENAME COLUMN "recipeId" TO "recipieId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_9fc16b7d8ed87a15a35e8966f77" FOREIGN KEY ("recipieId") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
