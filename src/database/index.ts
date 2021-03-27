import { Connection, createConnection, getConnectionOptions, TreeChildren } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  // return createConnection({ 
  //   type: "sqlite",
  //   database: "./src/database/database.sqlite",
  //   migrations: ["./src/database/migrations/**.ts"],
  //   entities: ["./src/models/*.ts"],
  //   logging: true,
  //   migrationsRun: true,
  //   cli: {
  //     migrationsDir: "./src/database/migrations"
  //   }
  // });

  return createConnection(defaultOptions);
}

