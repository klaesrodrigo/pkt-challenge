import Hobbie from './hobbie.entity';

export default interface IUser {
  name: string;
  hobbies: Hobbie[];
}
