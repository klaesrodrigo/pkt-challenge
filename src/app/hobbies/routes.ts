import { Router } from 'express';
import makeHobbieController from './factories/makeHobbieController';

const routes = Router();
const hobbieController = makeHobbieController();

routes.get('/', hobbieController.list);
routes.post('/', hobbieController.create);

export default routes;
