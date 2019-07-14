/* eslint-disable no-console */
const { getCurrentGitUser } = require('./../utils');

module.exports = async () => {
  const {
    userName,
    userEmail,
  } = await getCurrentGitUser();
  console.log(`️️✔️  username: ${userName} | email: ${userEmail}`);
};
