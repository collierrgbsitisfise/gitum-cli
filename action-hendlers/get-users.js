/* eslint-disable no-console */
const { lowDBService } = require('./../services');
const { getCurrentGitUser } = require('./../utils');

module.exports = async () => {
  const userList = lowDBService.getUsersList();
  const currentGitUser = await getCurrentGitUser();

  userList.forEach(({ userName, userEmail }) => {
    let prefix = '';

    if (currentGitUser.userName === userName && currentGitUser.userEmail === userEmail) {
      prefix = '✔️';
    }

    console.log(`${prefix}  username: ${userName} | email: ${userEmail}`);
  });
};
