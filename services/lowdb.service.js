const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');


class LowDbService {
  constructor() {
    const adapter = new FileSync(path.resolve(`${__dirname}/../data/db.json`));
    this.db = low(adapter);
    this.db.defaults({ users: [] })
      .write();
  }

  addNewUesr(userName, userEmail) {
    this.db.get('users')
      .push({ userName, userEmail })
      .write();
  }

  getUsersList() {
    return this.db.get('users')
      .cloneDeep()
      .value();
  }
}

module.exports = new LowDbService();