import IUser from 'src/entities/user.entity';
import IUserService from './contracts/IUserService';
import User from './user.model';

export default class UserService implements IUserService {
  list = async (): Promise<IUser[]> => {
    return await User.find();
  };

  create = async (hobbie: IUser): Promise<IUser> => {
    return await User.create(hobbie);
  };

  get = async (id: string): Promise<IUser> => {
    const user = await User.findOne({ _id: id });

    if (!user) {
      throw new Error('Hobbie not found');
    }

    return user;
  };

  update = async (data: IUser, id: string): Promise<void> => {
    await User.updateOne({ _id: id }, data);
  };

  delete = async (id: string): Promise<void> => {
    await User.deleteOne({ _id: id });
  };
}
