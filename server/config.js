const _ = require('lodash');

const config = {
  development: { mongodb_uri: 'mongodb://localhost:27017/luly' },
  production: { mongodb_uri: process.env.MONGODB_URI },
};

const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
module.exports = _.merge(defaultConfig, environmentConfig);
