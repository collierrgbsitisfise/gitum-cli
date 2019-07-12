/* eslint-disable no-console */
const commander = require('commander');
const {
  addNewUser,
  getUsers,
  getCurrentUser,
  removeUser,
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
  .command('n <userName> <userEmail>')
  .action(addNewUser);

commander
  .command('delete <userNameOrEmail>')
  .action(removeUser);

commander
  .command('current')
  .action(getCurrentUser);

commander
  .command('c')
  .action(getCurrentUser);

commander
  .command('list')
  .action(getUsers);

commander
  .command('l')
  .action(getUsers);

commander.parse(process.argv);
