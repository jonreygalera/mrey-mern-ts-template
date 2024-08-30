import { database } from "../../../config";
import IDatabase from "../../interfaces/IDatabase";
import { databaseDriver } from "../../types";

export default abstract class DatabaseConnection {
  
  protected connectionConfig : IDatabase;
  protected connectionDriver : databaseDriver = 'mongodb';

  constructor() {
    this.connectionConfig = database.connection[this.connectionDriver];
  }

  getConfig() : IDatabase {
    return this.connectionConfig;
  }

  getHost() : string {
    return this.connectionConfig.host;
  }

  getPort() : number|unknown {
    return this.connectionConfig.port;
  }

  abstract getUriConnection() : string;

}