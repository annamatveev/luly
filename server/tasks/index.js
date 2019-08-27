const ObjectId = require('mongodb').ObjectID;
const db = require('../db');

function getAllTasks() {
  return new Promise(resolve => {
    const collection = db.get().collection('tasks');
    collection.find().toArray((error, results) => resolve(results));
  });
}

function addNewTask(task) {
  return new Promise(resolve => {
    const collection = db.get().collection('tasks');
    collection.insertOne(task).then(function(response) {
      return resolve(JSON.stringify(response.ops[0]));
    });
  });
}

function deleteTask(taskId) {
  return new Promise(resolve => {
    const collection = db.get().collection('tasks');
    collection.deleteOne({ _id: taskId }).then(function(response) {
      return resolve(JSON.stringify(response.result));
    });
  });
}

function updateTask(task) {
  return new Promise(resolve => {
    const collection = db.get().collection('tasks');
    const { _id, ...rest } = task;
    collection
      .replaceOne({ _id: ObjectId(_id) }, rest)
      .then(function(response) {
        return resolve(JSON.stringify(response.ops[0]));
      });
  });
}

module.exports = {
  getAllTasks,
  addNewTask,
  deleteTask,
  updateTask,
};
