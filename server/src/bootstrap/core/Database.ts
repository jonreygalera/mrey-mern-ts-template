import IDatabase from '../interfaces/IDatabase';
import { database } from '../../config';
import mongoose, { Connection } from 'mongoose';
import { Mongodb, MongodbAtlas } from './databaseConnection';
import { databaseDriver } from '../types';
import DatabaseDriverException from '../../app/exceptions/DatabaseDriverException';
import DatabaseConnection from './databaseConnection/DatabaseConnection';

export default class Database {
  protected databaseConfig? : IDatabase;
  protected static instance: Database;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  async createConnection() : Promise<Connection> {
    const connection = this.getConnection();
    const uri: string = connection.getUriConnection();

    try {
      await mongoose.connect(uri);
      console.log(`Database connected: ${connection.getHost()}`);
      return mongoose.connection;
    } catch (error) {
      console.error('Database connection error:', error);
      throw error;
    }
  }

  async closeConnection(): Promise<void> {
    try {
      await mongoose.disconnect();
      console.log('Database connection closed successfully');
    } catch (error) {
      console.error('Error closing the database connection:', error);
      throw error;
    }
  }

  getConnection() : DatabaseConnection {
    switch(database.driver) {
      case 'mongodb' as databaseDriver : return new Mongodb();
      case 'mongodbAtlas' as databaseDriver : return new MongodbAtlas();
      default: throw new DatabaseDriverException();
    }
  }
}