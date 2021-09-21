import makeUserService from '@src/app/users/factories/makeUserService';
import HobbieService from '../hobbie.service';

const makeHobbieService = (): HobbieService => {
  return new HobbieService(makeUserService());
};

export default makeHobbieService;
