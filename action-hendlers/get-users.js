/* eslint-disable no-console */
const { lowDBService } = require('./../services');

module.exports = () => {
  const userList = lowDBService.getUsersList();
  userList.forEach(({ userName, userEmail }) => {
    console.log(`✔️  username: ${userName} | email: ${userEmail}`);
  });
};
