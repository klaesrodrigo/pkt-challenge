import IHobbie from 'src/entities/hobbie.entity';
import IHobbieService from './contracts/IHobbieService';
import Hobbie from './hobbie.model';

export default class HobbieService implements IHobbieService {
  list = async (): Promise<IHobbie[]> => {
    return await Hobbie.find();
  };

  create = async (hobbie: IHobbie): Promise<IHobbie> => {
    return await Hobbie.create(hobbie);
  };

  get = async (id: string): Promise<IHobbie> => {
    const hobbie = await Hobbie.findOne({ _id: id });

    if (!hobbie) {
      throw new Error('Hobbie not found');
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
