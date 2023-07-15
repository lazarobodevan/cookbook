import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatingTable1689465266753 implements MigrationInterface {
    name = 'CreatingTable1689465266753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(70) NOT NULL, "password" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying(255) NOT NULL, "_createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "recipieId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "ingredients" character varying NOT NULL, "steps" character varying NOT NULL, "categories" character varying NOT NULL, "likes" integer NOT NULL, "_createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_8f09680a51bf3669c1598a21682" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_following_users" ("usersId_1" uuid NOT NULL, "usersId_2" uuid NOT NULL, CONSTRAINT "PK_a41e4dcaab91b51d41267c083ea" PRIMARY KEY ("usersId_1", "usersId_2"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f257a3163914a2e398d7bfa800" ON "users_following_users" ("usersId_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_4a5ef04f52de98c49916c8798e" ON "users_following_users" ("usersId_2") `);
        await queryRunner.query(`CREATE TABLE "users_likes_recipes" ("usersId" uuid NOT NULL, "recipesId" uuid NOT NULL, CONSTRAINT "PK_a0ad3b3f570eeb35b93f96a31df" PRIMARY KEY ("usersId", "recipesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3e132cdbd9586f56e46bec4dd0" ON "users_likes_recipes" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9bef7348f9a34da1911d1fccee" ON "users_likes_recipes" ("recipesId") `);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_9fc16b7d8ed87a15a35e8966f77" FOREIGN KEY ("recipieId") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD CONSTRAINT "FK_ad4f881e4b9769d16c0ed2bb3f0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_following_users" ADD CONSTRAINT "FK_f257a3163914a2e398d7bfa8001" FOREIGN KEY ("usersId_1") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_following_users" ADD CONSTRAINT "FK_4a5ef04f52de98c49916c8798ec" FOREIGN KEY ("usersId_2") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_likes_recipes" ADD CONSTRAINT "FK_3e132cdbd9586f56e46bec4dd01" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_likes_recipes" ADD CONSTRAINT "FK_9bef7348f9a34da1911d1fccee7" FOREIGN KEY ("recipesId") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_likes_recipes" DROP CONSTRAINT "FK_9bef7348f9a34da1911d1fccee7"`);
        await queryRunner.query(`ALTER TABLE "users_likes_recipes" DROP CONSTRAINT "FK_3e132cdbd9586f56e46bec4dd01"`);
        await queryRunner.query(`ALTER TABLE "users_following_users" DROP CONSTRAINT "FK_4a5ef04f52de98c49916c8798ec"`);
        await queryRunner.query(`ALTER TABLE "users_following_users" DROP CONSTRAINT "FK_f257a3163914a2e398d7bfa8001"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP CONSTRAINT "FK_ad4f881e4b9769d16c0ed2bb3f0"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_9fc16b7d8ed87a15a35e8966f77"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9bef7348f9a34da1911d1fccee"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3e132cdbd9586f56e46bec4dd0"`);
        await queryRunner.query(`DROP TABLE "users_likes_recipes"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4a5ef04f52de98c49916c8798e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f257a3163914a2e398d7bfa800"`);
        await queryRunner.query(`DROP TABLE "users_following_users"`);
        await queryRunner.query(`DROP TABLE "recipes"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
