const db = require('../db');
// const activities = require('../data/tasks');

function getAllTasks() {
  return new Promise(resolve => {
    const collection = db.get().collection('tasks');
    collection.find().toArray((error, results) => resolve(results));
  });
}

module.exports = {
  getAllTasks,
};
