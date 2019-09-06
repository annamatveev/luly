/**
 *
 * Asynchronously loads the component for Ribbon
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
