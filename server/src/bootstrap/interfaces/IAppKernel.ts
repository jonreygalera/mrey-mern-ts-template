import { Express } from 'express';
import Database from '../core/Database';

export default interface IAppKernel {
  appExpress: Express;
  database: Database
};