import httpStatusCodes from 'http-status-codes';
import { APIError, APIErrorResponse } from '../../entities/apiError';

export default class ApiError {
  public static format(error: APIError): APIErrorResponse {
    return {
      ...{
        message: error.message || 'Internal Server Error!',
        code: error.code || 500,
        error: error.codeAsString
          ? error.codeAsString
          : httpStatusCodes.getStatusText(error.code || 500),
      },
      ...(error.documentation && { documentation: error.documentation }),
      ...(error.description && { description: error.description }),
    };
  }
}
