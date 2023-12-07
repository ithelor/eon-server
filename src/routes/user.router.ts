import { Router } from 'express';
import UserController from 'controller/user/UserController';
import { isAuthenticated } from 'controller/user/user.middleware';

const userRouter = Router();

userRouter.get('/', isAuthenticated, UserController.getUser);
userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);

export default userRouter;
