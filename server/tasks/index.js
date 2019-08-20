const activities = require('../data/tasks');

function getAllTasks() {
  return new Promise(resolve => resolve(activities));
}

module.exports = {
  getAllTasks,
};
