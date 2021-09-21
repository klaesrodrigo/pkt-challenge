import IHobbie from '../../../entities/hobbie';
import IUser from '../../../entities/user';

export default interface IUserService {
  list: () => Promise<IUser[]>;
  get(id: string): Promise<IUser>;
  create(hobbie: IUser): Promise<IUser>;
  update(data: IUser, id: string): Promise<void>;
  delete(id: string): Promise<void>;
  addHobbie(user_id: string, hobbie: IHobbie): Promise<void>;
}
