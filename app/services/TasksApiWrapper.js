import axios from 'axios/index';

export function editTask(task) {
  return axios.post(`/api/task`, task);
}

export function addTask(task) {
  return axios.put(`/api/task`, task);
}

export function deleteTask(taskId) {
  return axios.delete(`/api/task`, {
    params: { taskId },
  });
}
