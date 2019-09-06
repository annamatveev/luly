import axios from 'axios/index';
const API_PATH = 'http://localhost:3000/api';

export default function getContextMenuItems(contextParams) {
  return [
    {
      name: 'Delete This Task',
      action() {
        axios
          .delete(`${API_PATH}/task`, {
            params: { taskId: contextParams.node.data._id }, // eslint-disable-line no-underscore-dangle
          })
          .then(() => {
            contextParams.api.updateRowData({
              remove: [contextParams.node.data],
            });
          });
      },
    },
    {
      name: 'Add New Task',
      action() {
        axios
          .put(`${API_PATH}/task`, {
            description: '',
            owner: '',
            status: 'Next in line',
            priority: 'Low',
          })
          .then(response => {
            const newRow = contextParams.api.updateRowData({
              add: [response.data],
            });
            contextParams.api.startEditingCell({
              rowIndex: newRow.add.pop().rowIndex,
              colKey: 'description',
            });
          });
      },
    },
    'separator',
    'copy',
  ];
}
