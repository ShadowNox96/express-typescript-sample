import express, {Router} from 'express';
import { ManageUserUsecase } from '../usecase/manage_user_usecase';
import { UserRepository } from '../repositories/userRepositories';
import { DbConnection } from '../../frameworks/db/postgres/dbConnection';
import { User } from '../entity/User';
const connection = DbConnection.getRepository(User)


const repository = new UserRepository(connection);

const usecase: ManageUserUsecase = new ManageUserUsecase(repository);

const router: Router = express.Router();

const getAllUsers = (_req: express.Request, res: express.Response) => {
  usecase.getAllUsers().then(users => {
    console.log(users)
    res.status(200).json(users);
  })
  .catch(error => {
    console.log(error)
    res.status(500).json(error);
  })
}
// Routes
router.get('/', getAllUsers)

export const userRouter = router;

