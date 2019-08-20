/**
 *
 * Asynchronously loads the component for TasksProvider
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
