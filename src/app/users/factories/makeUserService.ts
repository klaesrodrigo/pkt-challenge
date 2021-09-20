import UserService from '../user.service';

const makeUserService = (): UserService => {
  return new UserService();
};

export default makeUserService;
