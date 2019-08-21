/**
 *
 * Asynchronously loads the component for WithTasks
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
