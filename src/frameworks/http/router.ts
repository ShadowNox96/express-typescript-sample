import { userRouter } from '../../user/http/userRouter';

const router = [
  {
    path: '/user',
    router: userRouter
  }
]

export default router;
