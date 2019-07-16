/* eslint-disable no-console */
const { lowDBService } = require('./../services');

module.exports = (userName, userEmail, alias) => {
  const userAlreadyExist = lowDBService.findUserByAlias(alias);

  if (userAlreadyExist) {
    console.log(`user '${alias}' already exists`);
    return;
  }

  lowDBService.addNewUesr(userName, userEmail, alias);
  console.log(`new '${alias}' user was created.`);
};
