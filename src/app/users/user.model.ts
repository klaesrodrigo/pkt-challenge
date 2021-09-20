import IUser from '../../entities/user.entity';
import { model, Model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({});

const user: Model<IUser> = model('User', UserSchema);

export default user;
