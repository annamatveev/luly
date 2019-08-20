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

module.exports = router;
