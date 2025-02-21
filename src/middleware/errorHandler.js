export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.type === 'validation') {
    return res.status(400).json({
      error: 'Validation Error',
      details: err.errors
    });
  }

  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
};