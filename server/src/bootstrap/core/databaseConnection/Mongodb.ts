import IDatabase from "../../interfaces/IDatabase";
import { databaseDriver } from "../../types";
import DatabaseConnection from "./DatabaseConnection";

export default class Mongodb extends DatabaseConnection {
  protected connectionDriver : databaseDriver = 'mongodbAtlas';

  getUriConnection(): string {
    const connectionConfig : IDatabase = this.connectionConfig;
    return `mongodb://${connectionConfig.host}:${connectionConfig.port}/${connectionConfig.name}`;
  }
}