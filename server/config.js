module.exports = {
  development: { mongodb_uri: 'mongodb://localhost:27017' },
  production: { mongodb_uri: process.env.MONGODB_URI },
};
