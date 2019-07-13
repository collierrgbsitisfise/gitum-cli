/* eslint-disable no-console */
const { lowDBService } = require('./../services');

module.exports = (input) => {
  const value = lowDBService.findUserByUserNameOrEmail(input);

  if (!value) {
    console.log(`incorrect value '${input}' - user was not found!`);
    return;
  }

  lowDBService.deleteByEmail(value.userEmail);
  console.log(`user '${input} was deleted'`);
};
