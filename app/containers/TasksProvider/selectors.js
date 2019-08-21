import { createSelector } from 'reselect';
import { initialState } from 'containers/TasksProvider/reducer';

const selectTasksProviderDomain = state =>
  state.get('tasksProvider', initialState);

const makeSelectTasksProvider = () =>
  createSelector(
    selectTasksProviderDomain,
    substate => substate.toJS(),
  );

const makeSelectLoading = () =>
  createSelector(
    selectTasksProviderDomain,
    globalState => globalState.get('loading'),
  );

const makeSelectError = () =>
  createSelector(
    selectTasksProviderDomain,
    globalState => globalState.get('error'),
  );

const makeSelectTasksData = () =>
  createSelector(
    selectTasksProviderDomain,
    globalState => globalState.get('tasks'),
  );

export default makeSelectTasksProvider;
export {
  selectTasksProviderDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectTasksData,
};
