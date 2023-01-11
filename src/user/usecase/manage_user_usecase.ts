import { User } from '../entity/User';
import { UserRepository } from '../repositories/userRepositories';

export class ManageUserUsecase {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async getAllUsers(): Promise<User[]> {
    return await this.repository.getAllUsers();
  
  }
  
}