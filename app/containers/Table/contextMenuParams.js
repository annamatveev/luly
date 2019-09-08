import axios from 'axios/index';

export default function getContextMenuItems(contextParams) {
  return [
    {
      name: 'Archive This Task',
      action() {
        axios
          .delete(`/api/task`, {
            params: { taskId: contextParams.node.data._id }, // eslint-disable-line no-underscore-dangle
          })
          .then(() => {
            contextParams.api.updateRowData({
              remove: [contextParams.node.data],
            });
          });
      },
      icon: '<i class="ag-icon ag-icon-save"></i>',
    },
    {
      name: 'Add New Task',
      shortcut: 'Alt + N',
      action() {
        axios
          .put(`/api/task`, {
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
      icon: '<i class="ag-icon ag-icon-plus"></i>',
    },
    'separator',
    'copy',
  ];
}
