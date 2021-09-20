import IHobbie from '../../../entities/hobbie';

export default interface IHobbieService {
  list: () => Promise<IHobbie[]>;
  get(id: string): Promise<IHobbie>;
  create(user_id: string, hobbie: IHobbie): Promise<IHobbie>;
  update(data: IHobbie, id: string): Promise<void>;
  delete(id: string): Promise<void>;
}
