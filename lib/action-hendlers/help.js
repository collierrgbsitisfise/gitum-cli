/* eslint-disable no-console */
module.exports = () => {
  console.log('GITUM-CLI provided next API: ');
  console.log('new:');
  console.log('    -"new <userName> <userEmail> <alias>" - create new gitum user');
  console.log('    -"n <userName> <userEmail> <alias>" - short verison');
  console.log('delete:');
  console.log('    -"delete <alias>" - delete gitum user by alias');
  console.log('    -"d <alias>" - short verison');
  console.log('current:');
  console.log('    -"current" - show current git user in use');
  console.log('    -"c" - short verison');
  console.log('set:');
  console.log('    -"set <alias>" - set new git user by alias');
  console.log('    -"s <alias>" - short verison');
  console.log('set:');
  console.log('    -"set <alias>" - set new git user by alias');
  console.log('    -"s <alias>" - short verison');
  console.log('list:');
  console.log('    -"list" - show full list of gitum users');
  console.log('    -"l" - short verison');
};
