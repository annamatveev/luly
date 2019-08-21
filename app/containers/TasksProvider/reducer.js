import { fromJS } from 'immutable';
import { LOAD_TASKS_SUCCESS, LOAD_TASKS, LOAD_TASKS_ERROR } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  tasks: [],
});

export default function tasksProviderReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TASKS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('tasks', []);
    case LOAD_TASKS_SUCCESS:
      return state.set('tasks', action.events).set('loading', false);
    case LOAD_TASKS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}
