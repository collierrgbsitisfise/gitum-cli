const { lowDBService } = require('./../services');

module.exports = (userName, userEmail) => {
  lowDBService.addNewUesr(userName, userEmail);
};
