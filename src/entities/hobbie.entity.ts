import { Document } from 'mongoose';

enum ExperienceLevelEnum {
  LOW = 'Baixa',
  MEDIUM = 'Médio',
  HIGH = 'Alta',
  VERY_HIGH = 'Muito alta',
}

export default interface IHobbie extends Document {
  name: string;
  experienceLevel: ExperienceLevelEnum;
  year: number;
}
