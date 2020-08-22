const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  const error = err;
  return res
    .status(error.statusCode || 500)
    .send({ error: error.message });
};

module.exports = errorHandler;
