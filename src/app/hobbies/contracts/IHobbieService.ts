import IHobbie from '../../../entities/hobbie.entity';

export default interface IHobbieService {
  list: () => Promise<IHobbie[]>;
  get(id: string): Promise<IHobbie>;
  create(hobbie: IHobbie): Promise<IHobbie>;
  update(data: IHobbie, id: string): Promise<void>;
  delete(id: string): Promise<void>;
}
