import IHobbie from 'src/entities/hobbie';
import NotFoundError from '../../util/error/notFoundError';
import IUserService from '../users/contracts/IUserService';
import IHobbieService from './contracts/IHobbieService';
import Hobbie from './hobbie.model';

export default class HobbieService implements IHobbieService {
  constructor(private readonly userService: IUserService) {}
  list = async (): Promise<IHobbie[]> => {
    return await Hobbie.find();
  };

  create = async (user_id: string, hobbie: IHobbie): Promise<IHobbie> => {
    const hobbieCreated = await Hobbie.create(hobbie);
    await this.userService.addHobbie(user_id, hobbieCreated);
    return hobbieCreated;
  };

  get = async (id: string): Promise<IHobbie> => {
    const hobbie = await Hobbie.findOne({ _id: id });

    if (!hobbie) {
      throw new NotFoundError('Hobbie not found.', 404);
    }

    return hobbie;
  };

  update = async (data: IHobbie, id: string): Promise<void> => {
    await Hobbie.updateOne({ _id: id }, data);
  };

  delete = async (id: string): Promise<void> => {
    await Hobbie.deleteOne({ _id: id });
  };
}
