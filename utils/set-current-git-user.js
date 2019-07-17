/* eslint-disable no-console */
const { exec } = require('child_process');
const { lowDBService } = require('./../services');

const setUserName = username => new Promise((resolve, reject) => {
  exec(`git config --global user.name ${username}`, (err, data) => {
    if (err) {
      reject(err);
    }

    resolve(data.replace(/(\r\n|\n|\r)/gm, ''));
  });
});

const setEmail = email => new Promise((resolve, reject) => {
  exec(`git config --global user.email ${email}`, (err, data) => {
    if (err) {
      reject(err);
    }

    resolve(data.replace(/(\r\n|\n|\r)/gm, ''));
  });
});

module.exports = async (input) => {
  const usersList = lowDBService.getUsersList();
  const findValue = usersList.find(({ alias }) => alias === input);

  if (!findValue) {
    return;
  }

  const { userName, userEmail } = findValue;
  await Promise.all([
    setUserName(userName.replace(/(\r\n|\n|\r)/gm, '')),
    setEmail(userEmail.replace(/(\r\n|\n|\r)/gm, '')),
  ]);

  // eslint-disable-next-line consistent-return
  return {
    userName,
    userEmail,
  };
};
