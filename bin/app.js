#!/usr/bin/env node

/* eslint-disable no-console */
const commander = require('commander');
const {
  addNewUser,
  getUsers,
  getCurrentUser,
  removeUser,
  setCurrentUser,
  helpInfo,
} = require('./../lib/action-hendlers');

commander
  .command('help')
  .action(helpInfo);

commander
  .command('h')
  .action(helpInfo);

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
  .command('set <alias>')
  .action(setCurrentUser);

commander
  .command('s <alias>')
  .action(setCurrentUser);

commander
  .command('list')
  .action(getUsers);

commander
  .command('l')
  .action(getUsers);

commander.parse(process.argv);
