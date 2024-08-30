import UserController from '../app/controllers/UserController';
import { Router } from 'express';
import UserValidator from '../app/validators/UserValidator';
import AuthMiddleware from '../app/middleware/AuthMiddleware';

const apiRouter = Router();

apiRouter.use((new AuthMiddleware).handle)
apiRouter.get('/users', UserController.getAllUsers.bind(UserController));
apiRouter.get('/user/:id', UserController.getUser.bind(UserController));
apiRouter.post('/user/create', UserValidator.validate, UserController.createUser.bind(UserController));
apiRouter.put('/user/update/:id', UserValidator.validate, UserController.updateUser.bind(UserController));

export default apiRouter;