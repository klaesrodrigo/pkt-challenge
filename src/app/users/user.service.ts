import IHobbie from '@src/entities/hobbie';
import IUser from '@src/entities/user';
import NotFoundError from '@src/util/error/notFoundError';
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
    const user = await User.findOne({ _id: id }).populate('hobbies');

    if (!user) {
      throw new NotFoundError('User not found.', 404);
    }

    return user;
  };

  update = async (data: IUser, id: string): Promise<void> => {
    await User.updateOne({ _id: id }, data);
  };

  delete = async (id: string): Promise<void> => {
    await User.deleteOne({ _id: id });
  };

  addHobbie = async (user_id: string, hobbie: IHobbie): Promise<void> => {
    const user = await this.get(user_id);
    user.hobbies.push(hobbie);
    await this.update(user, user_id);
  };
}
