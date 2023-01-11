import { User } from '../entity/User';
import { DbConnection } from '../../frameworks/db/postgres/dbConnection';


const dbConnection = DbConnection.getRepository(User)


export class UserRepository {
  connection: typeof dbConnection;

  constructor(connection: typeof dbConnection) {
    this.connection = connection;
  }

  async getAllUsers(): Promise<User[]> {
    return await this.connection.find()
  }


}
