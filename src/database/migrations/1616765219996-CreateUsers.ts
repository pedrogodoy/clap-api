import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1616765219996 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "users",
          columns: [
            {
              name: "id",
              type: "int4",
              isGenerated: true,
              isPrimary: true
            },
            {
              name: "name",
              type: "varchar"
            },
            {
              name: "email",
              type: "varchar"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users");
    }

}
