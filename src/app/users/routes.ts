import { Router } from 'express';
import makeUserController from './factories/makeUserController';

const routes = Router();
const userController = makeUserController();

routes.get('/', userController.list);
routes.get('/:id', userController.get);
routes.post('/', userController.create);
routes.put('/:id', userController.update);
routes.delete('/:id', userController.delete);

export default routes;
