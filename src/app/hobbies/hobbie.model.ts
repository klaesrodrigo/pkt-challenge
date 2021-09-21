import IHobbie from '@src/entities/hobbie';
import { Model, model, Schema } from 'mongoose';

const HobbieSchema: Schema = new Schema({
  experienceLevel: { type: String, required: true },
  name: { type: String, required: true },
  year: { type: String, required: true },
});

const hobbie: Model<IHobbie> = model('Hobbie', HobbieSchema);

export default hobbie;
