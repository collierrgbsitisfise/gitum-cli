/* eslint-disable no-console */
const { lowDBService } = require('./../services');

module.exports = (value) => {
  lowDBService.deleteByUserNameOrEmail(value);
};
