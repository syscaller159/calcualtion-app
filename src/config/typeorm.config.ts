import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import DbConfigInterface from './interfaces/db-config.interface';
import { CalculationEntity } from '../calculator-module/entities/calculation.entity';

const dbConfig = config.get<DbConfigInterface>('db');

export const dbConfiguration: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  logging: true,
  entities: [
    CalculationEntity
  ],
  synchronize: dbConfig.synchronize,
  keepConnectionAlive: true,
};