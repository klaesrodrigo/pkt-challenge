import IUser from '@src/entities/user';
import { model, Model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  hobbies: [{ type: Schema.Types.ObjectId, ref: 'Hobbie' }],
});

const user: Model<IUser> = model('User', UserSchema);

export default user;
