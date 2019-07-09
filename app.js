/* eslint-disable no-console */
const commander = require('commander');
const {
  addNewUser,
  getUsers,
  getCurrentUser,
} = require('./action-hendlers');

commander
  .command('help')
  .action(() => {
    console.log('Help Docs');
  });

commander
  .command('new <userName> <userEmail>')
  .action(addNewUser);

commander
  .command('current')
  .action(getCurrentUser);

commander
  .command('list')
  .action(getUsers);

commander.parse(process.argv);
