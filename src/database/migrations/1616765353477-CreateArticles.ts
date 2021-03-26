import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateArticles1616765353477 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "articles",
        columns: [
          {
            name: "id",
            type: "int4",
            isGenerated: true,
            isPrimary: true
          },
          {
            name: "title",
            type: "varchar"
          },
          {
            name: "text",
            type: "varchar"
          }

        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("articles")
  }

}
