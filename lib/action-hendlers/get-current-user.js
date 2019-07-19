/* eslint-disable no-console */
const { getCurrentGitUser } = require('./../utils');
const { lowDBService } = require('./../services');

const defaultAlias = 'main';

module.exports = async () => {
  const {
    userName,
    userEmail,
  } = await getCurrentGitUser();

  const value = lowDBService.findUserByUserNameAndEmail(userName, userEmail);

  const alias = value ? value.alias : defaultAlias;

  if (!value) {
    lowDBService.addNewUesr(userName, userEmail, alias);
  }

  console.log(`️️✔️  alias: ${alias} | username: ${userName} | email: ${userEmail}`);
};
