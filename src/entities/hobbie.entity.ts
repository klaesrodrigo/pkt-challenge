enum ExperienceLevelEnum {
  LOW = 'Baixa',
  MEDIUM = 'Médio',
  HIGH = 'Alta',
  VERY_HIGH = 'Muito alta',
}

export default interface IHobbie {
  name: string;
  experienceLevel: ExperienceLevelEnum;
  year: number;
}
