import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tasksProvider state domain
 */

const selectTasksProviderDomain = state => state.tasksProvider || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TasksProvider
 */

const makeSelectTasksProvider = () =>
  createSelector(
    selectTasksProviderDomain,
    substate => substate,
  );

export default makeSelectTasksProvider;
export { selectTasksProviderDomain };
