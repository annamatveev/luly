import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_TASKS } from 'containers/TasksProvider/constants';
import {
  tasksLoaded,
  tasksLoadingError,
} from 'containers/TasksProvider/actions';

import request from 'utils/request';

export function* getTasks() {
  const requestURL = `/api/tasks`;

  try {
    const tasks = yield call(request, requestURL);
    yield put(tasksLoaded(tasks));
  } catch (err) {
    yield put(tasksLoadingError(err));
  }
}

export default function* tasksProviderSaga() {
  yield takeLatest(LOAD_TASKS, getTasks);
}
