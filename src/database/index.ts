import { Connection, createConnection, getConnectionOptions, TreeChildren } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    //If the test env, use the test database
    Object.assign(defaultOptions, {
      database: 
        process.env.NODE_ENV === 'test' 
          ? "mediumtest" 
          : defaultOptions.database 
    })
  );
}

