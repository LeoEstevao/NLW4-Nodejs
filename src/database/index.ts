import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {

    // get connection configurations of our typeORM
    const defaultOptions = await getConnectionOptions();


    return createConnection(
        // Get the object defaulOption, and re-write database value
        Object.assign(defaultOptions, {
            // if NODE_ENV is a test enviroment, change to the test database
            database: process.env.NODE_ENV === 'test' ? "nps_test" : defaultOptions.database
        })
    );

} 

