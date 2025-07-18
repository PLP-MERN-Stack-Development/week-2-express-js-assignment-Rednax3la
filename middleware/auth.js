module.exports = (req, res, next) => {
  const apiKey = req.header('x-api-key');
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({ statusCode: 401, message: 'Unauthorized' });
  }
  next();
};
