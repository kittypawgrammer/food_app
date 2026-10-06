// Any error passed to next(err) or thrown in a route ends up here.
// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Something went wrong' });
};
