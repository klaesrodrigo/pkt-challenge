import { APIError } from '../../entities/apiError';

export default class NotFoundError implements APIError {
  code: number;
  message: string;
  constructor(message: string, code: number) {
    this.code = code;
    this.message = message;
  }
}
