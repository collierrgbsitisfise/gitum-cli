/* eslint-disable no-console */
const commander = require('commander');

commander
  .version('0.0.1')
  .option('-n, --new <userName> <userEmail>', 'Add new git user')
  .option('-c, --current', 'Show current git user');


commander
  .command('help')
  .action(() => {
    console.log('Help Docs');
  });

commander
  .command('new <userName> <userEmail>')
  .action((userName, userEmail) => {
    console.log(userName);
    console.log(userEmail);
  });


commander.parse(process.argv);
