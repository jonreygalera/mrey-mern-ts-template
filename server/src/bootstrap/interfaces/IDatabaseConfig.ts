import { databaseDriver } from "../types";
import IDatabase from "./IDatabase";

export default interface IDatabaseConfig {
  driver: databaseDriver;
  connection: Record<databaseDriver, IDatabase>
}