import IDatabase from "../../interfaces/IDatabase";
import { databaseDriver } from "../../types";
import DatabaseConnection from "./DatabaseConnection";

export default class MongodbAtlas extends DatabaseConnection {
  protected connectionDriver : databaseDriver = 'mongodbAtlas';

  getUriConnection(): string {
    const connectionConfig : IDatabase = this.connectionConfig;
    return `mongodb+srv://${connectionConfig.username}:${connectionConfig.password}@${connectionConfig.host}/${connectionConfig.name}?retryWrites=true&w=majority&appName=${connectionConfig.appName}`;
  }
}