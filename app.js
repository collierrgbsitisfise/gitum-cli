/* eslint-disable no-console */
const commander = require('commander');
const {
  addNewUser,
  getUsers,
  getCurrentUser,
  removeUser,
  setCurrentUser,
} = require('./action-hendlers');

commander
  .command('help')
  .action(() => {
    console.log('Help Docs');
  });

commander
  .command('h')
  .action(() => {
    console.log('Help Docs');
  });

commander
  .command('new <userName> <userEmail> <alias>')
  .action(addNewUser);

commander
  .command('n <userName> <userEmail> <alias>')
  .action(addNewUser);

commander
  .command('delete <alias>')
  .action(removeUser);

commander
  .command('d <alias>')
  .action(removeUser);

commander
  .command('current')
  .action(getCurrentUser);

commander
  .command('c')
  .action(getCurrentUser);

commander
  .command('set')
  .action(setCurrentUser);

commander
  .command('s')
  .action(setCurrentUser);

commander
  .command('list')
  .action(getUsers);

commander
  .command('l')
  .action(getUsers);

commander.parse(process.argv);
