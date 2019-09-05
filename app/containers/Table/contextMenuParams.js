import axios from 'axios/index';
const API_PATH = 'http://localhost:3000/api';

export default function getContextMenuItems(contextParams) {
  return [
    {
      name: 'Delete',
      shortcut: 'Alt + W',
      action() {
        axios
          .delete(`${API_PATH}/task`, {
            params: { taskId: contextParams.node.data._id }, // eslint-disable-line no-underscore-dangle
          })
          .then(() => {
            contextParams.api.updateRowData({ remove: [contextParams.node.data] });
          });
      },
    },
    'separator',
    'copy',
  ];
}
