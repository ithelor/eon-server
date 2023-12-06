import { Router } from 'express';
import UserController from 'controller/user/UserController';
import { isAuthenticated } from 'controller/user/user.middleware';

const userRouter = Router();

userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);
userRouter.get('/profile', isAuthenticated, (req, res) => {
    res.json({ message: `Welcome, ${req.body.user.username}` });
});

export default userRouter;
