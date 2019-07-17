/* eslint-disable no-console */
const { setCurrentGitUser } = require('./../utils');

module.exports = async (alias) => {
  const result = await setCurrentGitUser(alias);
  if (!result) {
    console.log(`incorrect alias - ${alias}`);
    return;
  }

  console.log(`currnet git user: ${result.userName} | ${result.userEmail}`);
};
