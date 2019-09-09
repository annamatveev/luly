
export const makeGetContextMenuItems = (deleteTask, addTask) => contextParams => [
  {
    name: 'Archive This Task',
    action() {
      deleteTask(contextParams.node.data._id).then(() => { // eslint-disable-line no-underscore-dangle
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
      const defaultTaskParams = {
        description: '',
        owner: '',
        status: 'Next in line',
        priority: 'Low',
      };
      addTask(defaultTaskParams).then(response => {
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

export default makeGetContextMenuItems;
