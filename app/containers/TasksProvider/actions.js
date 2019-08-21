import {
  LOAD_TASKS,
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS_ERROR,
} from './constants';

export function loadTasks() {
  return {
    type: LOAD_TASKS,
  };
}

export function tasksLoaded(tasks, username) {
  return {
    type: LOAD_TASKS_SUCCESS,
    tasks,
    username,
  };
}

export function tasksLoadingError(error) {
  return {
    type: LOAD_TASKS_ERROR,
    error,
  };
}
