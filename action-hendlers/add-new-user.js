/* eslint-disable no-console */
const { lowDBService } = require('./../services');

module.exports = (userName, userEmail) => {
  const userAlreadyExist = lowDBService.findUserByUserNameAndEmail(userName, userEmail);

  if (userAlreadyExist) {
    console.log(`user '${userName}' already exists`);
    return;
  }

  lowDBService.addNewUesr(userName, userEmail);
  console.log(`new '${userName}' user was created.`);
};
