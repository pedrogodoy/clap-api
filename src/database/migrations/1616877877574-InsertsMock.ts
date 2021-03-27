import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertsMock1616877877574 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      //insert mocks values
      await queryRunner.query(`
        INSERT INTO public.articles (title,"text")
        VALUES ('article test','lorem ipsum');

        INSERT INTO public.users ("name",email)
	      VALUES ('test','test@test.com.br');
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
