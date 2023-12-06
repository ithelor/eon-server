import { Router } from 'express';
import UserController from 'controller/user/UserController';

const userRouter = Router();

userRouter.post('/register', UserController.register);

export default userRouter;
