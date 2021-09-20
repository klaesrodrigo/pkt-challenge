import HobbieController from '../hobbie.controller';
import makeHobbieService from './makeHobbieService';

const makeHobbieController = (): HobbieController => {
  const service = makeHobbieService();
  return new HobbieController(service);
};

export default makeHobbieController;
