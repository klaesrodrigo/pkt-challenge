import HobbieService from '../hobbie.service';

const makeHobbieService = (): HobbieService => {
  return new HobbieService();
};

export default makeHobbieService;
