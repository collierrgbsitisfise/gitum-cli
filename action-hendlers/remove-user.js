/* eslint-disable no-console */
const { lowDBService } = require('./../services');

module.exports = (alas) => {
  const value = lowDBService.findUserByAlias(alas);

  if (!value) {
    console.log(`incorrect value '${alas}' - user was not found!`);
    return;
  }

  lowDBService.deleteByEmail(value.userEmail);
  console.log(`user '${alas} was deleted'`);
};
