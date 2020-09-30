import { validationResult } from 'express-validator';
import wrap from './wrap';
import { ValidationError } from '../utils/errors';

const validator = (validations) => {
  return wrap(async (req, res, next) => {
    await Promise.all(
      validations.map((validation) => validation.run(req)),
    );
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    throw new ValidationError(errors.array());
  });
};

module.exports = validator;
