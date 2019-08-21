import { createSelector } from 'reselect';
import { initialState } from 'containers/TasksProvider/reducer';

const selectTasksProviderDomain = state => state.tasksProvider || initialState;

const makeSelectTasksProvider = () =>
  createSelector(
    selectTasksProviderDomain,
    substate => substate,
  );

const makeSelectLoading = () =>
  createSelector(
    selectTasksProviderDomain,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectTasksProviderDomain,
    globalState => globalState.error,
  );

const makeSelectTasksData = () =>
  createSelector(
    selectTasksProviderDomain,
    globalState => globalState.tasks,
  );

export default makeSelectTasksProvider;
export {
  selectTasksProviderDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectTasksData,
};
