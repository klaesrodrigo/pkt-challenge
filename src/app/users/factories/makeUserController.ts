import UserController from '../user.controller';
import makeUserService from './makeUserService';

const makeUserController = (): UserController => {
  const service = makeUserService();
  return new UserController(service);
};

export default makeUserController;
