import { Router } from 'express';
import makeHobbieController from './factories/makeHobbieController';
import HobbieSchema from './validatorSchema';

const routes = Router();
const hobbieController = makeHobbieController();

routes.get('/', hobbieController.list);
routes.get('/:id', HobbieSchema.get, hobbieController.get);
routes.post('/user/:user_id', HobbieSchema.create, hobbieController.create);
routes.put('/:id', HobbieSchema.update, hobbieController.update);
routes.delete('/:id', HobbieSchema.delete, hobbieController.delete);

export default routes;
