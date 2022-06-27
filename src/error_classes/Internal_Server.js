import { RETURN_CODE } from '../common/ReturnCode';
import { ApplicationError } from './Base';

export default class InternalServerError extends ApplicationError {
  constructor(message, options = {}) {
    super(message);
    this.statusCode = RETURN_CODE.INTERNAL_SERVER;
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(options)) {
      console.log(key, value);
      this[key] = value;
    }
  }
}
