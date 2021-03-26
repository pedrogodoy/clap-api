import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClaps1616765643285 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "claps",
          columns: [
            {
              name: "id",
              type: "int4",
              isGenerated: true,
              isPrimary: true
            },
            {
              name: "user_id",
              type: "int4"
            },
            {
              name: "article_id",
              type: "int4"
            },
            {
              name: "claps",
              type: "int4"
            }
          ],
          foreignKeys: [
            {
              name: "FKUser",
              referencedTableName: "users",
              referencedColumnNames: ["id"],
              columnNames: ["user_id"],
              onDelete: "CASCADE",
              onUpdate: "CASCADE"
            },
            {
              name: "FKArticle",
              referencedTableName: "articles",
              referencedColumnNames: ["id"],
              columnNames: ["article_id"],
              onDelete: "CASCADE",
              onUpdate: "CASCADE"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("claps");
    }

}
