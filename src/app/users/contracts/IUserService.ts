import IUser from 'src/entities/user.entity';

export default interface IUserService {
  list: () => Promise<IUser[]>;
  get(id: string): Promise<IUser>;
  create(hobbie: IUser): Promise<IUser>;
  update(data: IUser, id: string): Promise<void>;
  delete(id: string): Promise<void>;
}
