import { env } from "../utils";
import { databaseDriver } from "../bootstrap/types";
import IDatabaseConfig from "../bootstrap/interfaces/IDatabaseConfig";

const database : IDatabaseConfig  = {
  driver: env('DB_DRIVER', 'mongodb' as databaseDriver),

  connection: {
    mongodb: {
      host: env('DB_HOST', 'localhost'),
      port: env('DB_PORT', 27017),
      username: env('DB_USERNAME', 'root'),
      password: env('DB_PASSWORD', 'root'),
      appName: env('DB_APP_NAME', 'test'),
      name: env('DB_NAME', 'test'),
    },
    mongodbAtlas: {
      host: env('DB_HOST', 'localhost'),
      username: env('DB_USERNAME', 'root'),
      password: env('DB_PASSWORD', 'root'),
      appName: env('DB_APP_NAME', 'test'),
      name: env('DB_NAME', 'test'),
    }
  }
};

export default database;
