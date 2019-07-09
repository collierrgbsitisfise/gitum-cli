/* eslint-disable no-console */
const { exec } = require('child_process');

const getUserName = () => new Promise((resolve, reject) => {
  exec('git config user.name', (err, data) => {
    if (err) {
      reject(err);
    }

    resolve(data.replace(/(\r\n|\n|\r)/gm, ''));
  });
});

const getEamil = () => new Promise((resolve, reject) => {
  exec('git config user.email', (err, data) => {
    if (err) {
      reject(err);
    }

    resolve(data.replace(/(\r\n|\n|\r)/gm, ''));
  });
});

module.exports = async () => {
  const userName = await getUserName();
  const userEmail = await getEamil();
  console.log(`️️✔️  username: ${userName} | email: ${userEmail}`);
};
