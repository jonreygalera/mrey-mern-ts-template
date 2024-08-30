import express, { Express } from 'express';
import IAppKernel from './interfaces/IAppKernel';
import RegisterProvider from '../app/providers/RegisterProvider';
import Database from './core/Database';

export const appKernel : IAppKernel = {
  appExpress: express(),
  database: Database.getInstance()
};

export default async function() : Promise<Express> {

  try {
    await appKernel.database.createConnection();
    (new RegisterProvider(appKernel)).register();
    return appKernel.appExpress;
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
}