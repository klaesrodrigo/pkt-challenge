import { Router } from 'express';
import UserSchema from './validatorSchema';
import makeUserController from './factories/makeUserController';

const routes = Router();
const userController = makeUserController();

routes.get('/', userController.list);
routes.get('/:id', UserSchema.get, userController.get);
routes.post('/', UserSchema.create, userController.create);
routes.put('/:id', UserSchema.update, userController.update);
routes.delete('/:id', UserSchema.delete, userController.delete);

export default routes;
