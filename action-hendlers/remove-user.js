/* eslint-disable no-console */
const { lowDBService } = require('./../services');

module.exports = (alias) => {
  const value = lowDBService.findUserByAlias(alias);

  if (!value) {
    console.log(`incorrect value '${alias}' - user was not found!`);
    return;
  }

  lowDBService.deleteByEmail(alias);
  console.log(`user '${alias} was deleted'`);
};
