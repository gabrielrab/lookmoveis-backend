import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../utils/errors';

module.exports = (req, res, next) => {
  const token =
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
      ? req.headers.authorization.split(' ')[1]
      : false;

  if (req.originalUrl.match(/^\/auth\/?/) !== null) {
    return next();
  }

  if (req.headers.apikey === process.env.API_KEY) {
    return next();
  }

  if (!token) throw new UnauthorizedError();

  return jwt.verify(
    token,
    process.env.JWT_PRIVATE_KEY,
    (err, decoded) => {
      if (err) {
        throw new UnauthorizedError(err.message);
      }
      req.user = decoded;
      next();
    },
  );
};
