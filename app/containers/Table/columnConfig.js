import statusCellRenderer from './statusCellRenderer';
import priorityCellRenderer from './priorityCellRenderer';
import dueDateCellRenderer from './dueDateCellRenderer';
import OwnerCellRenderer from './ownerCellRenderer';

export default [
  {
    field: 'description',
    width: 200,
    cellEditor: 'agLargeTextCellEditor',
    cellEditorParams: {
      maxLength: '300', // override the editor defaults
      cols: '50',
      rows: '6',
    },
  },
  {
    field: 'owner',
    width: 50,
    cellRendererFramework: OwnerCellRenderer,
  },
  {
    field: 'status',
    width: 50,
    cellStyle: { padding: 0 },
    cellRendererFramework: statusCellRenderer,
    cellEditor: 'agRichSelectCellEditor',
    cellEditorParams: {
      values: ['Stuck', 'Working on it', 'Done', 'Not making it'],
    },
  },
  {
    field: 'due_date',
    width: 50,
    filter: 'agDateColumnFilter',
  },
  {
    field: 'priority',
    width: 50,
    cellRendererFramework: priorityCellRenderer,
  },
];
