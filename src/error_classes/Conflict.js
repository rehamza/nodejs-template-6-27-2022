import { RETURN_CODE } from '../common/ReturnCode';
import { ApplicationError } from './Base';

export default class ConflictError extends ApplicationError {
  constructor(message, options = {}) {
    super(message);
    this.statusCode = RETURN_CODE.CONFLICT;
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(options)) {
      this[key] = value;
    }
  }
}
