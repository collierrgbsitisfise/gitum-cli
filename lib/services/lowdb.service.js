const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');

class LowDbService {
  constructor() {
    const pathToJSON = `${__dirname}/../data/db.json`;
    const adapter = new FileSync(path.resolve(pathToJSON));

    this.db = low(adapter);
    this.db.defaults({ users: [] })
      .write();
  }

  addNewUesr(userName, userEmail, alias) {
    this.db.get('users')
      .push({ userName, userEmail, alias })
      .write();
  }

  getUsersList() {
    return this.db.get('users')
      .cloneDeep()
      .value();
  }

  findUserByAlias(alias) {
    return this.db.get('users').find({ alias }).value();
  }

  findUserByUserNameAndEmail(userName, userEmail) {
    return this.db.get('users').find({ userName, userEmail }).value();
  }

  deleteByEmail(alias) {
    this.db.get('users').remove({ alias }).write();
  }
}

module.exports = new LowDbService();
