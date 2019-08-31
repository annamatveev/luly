/**
 *
 * Asynchronously loads the component for StatusCellRenderer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
