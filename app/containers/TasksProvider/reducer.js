import produce from 'immer';
import { LOAD_TASKS_SUCCESS, LOAD_TASKS, LOAD_TASKS_ERROR } from './constants';

export const initialState = {
  loading: false,
  error: false,
  tasks: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_TASKS:
        draft.loading = true;
        draft.error = false;
        draft.tasks = [];
        break;
      case LOAD_TASKS_SUCCESS:
        draft.loading = false;
        draft.tasks = action.tasks;
        break;
      case LOAD_TASKS_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default homeReducer;
