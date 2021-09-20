import { Router } from 'express';
import makeHobbieController from './factories/makeHobbieController';

const routes = Router();
const hobbieController = makeHobbieController();

routes.get('/', hobbieController.list);
routes.get('/:id', hobbieController.get);
routes.post('/', hobbieController.create);
routes.put('/:id', hobbieController.update);
routes.delete('/:id', hobbieController.delete);

export default routes;
