import { DataSource } from 'typeorm';
import config from '../../../../config/enviroment';
import { User } from '../../../user/entity/User';

export const DbConnection = new DataSource({
  type: config.database.db_driver as any,
  host: config.database.pg_host,
  port: config.database.pg_port as number,
  username: config.database.pg_user_name,
  password: config.database.pg_password,
  database: config.database.pg_db,
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});
