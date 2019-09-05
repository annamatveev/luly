const router = require('express').Router();
const asyncMiddleware = require('../middlewares/asyncMiddleware');
const tasksStore = require('../tasks');

router.get(
  '/tasks',
  asyncMiddleware(async (req, res) => {
    const tasks = await tasksStore.getAllTasks();
    res.send(tasks);
  }),
);

router.post(
  '/task',
  asyncMiddleware(async (req, res) => {
    const task = await tasksStore.updateTask(req.body);
    res.send(task);
  }),
);

router.delete(
  '/task',
  asyncMiddleware(async (req, res) => {
    const task = await tasksStore.deleteTask(req.query.taskId);
    res.send(task);
  }),
);

router.put(
  '/task',
  asyncMiddleware(async (req, res) => {
    const task = await tasksStore.addNewTask(req.body);
    res.send(task);
  }),
);

module.exports = router;
