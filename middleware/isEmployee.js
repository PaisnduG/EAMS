module.exports = function (req, res, next) {
  if (req.user && req.user.isEmployee) {
    console.log('admin');
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
};
