import statusCellRenderer from './statusCellRenderer';
import priorityCellRenderer from './priorityCellRenderer';

export default [
  {
    field: 'description',
    width: 200,
  },
  {
    field: 'owner',
    width: 50,
  },
  {
    field: 'status',
    width: 50,
    cellRendererFramework: statusCellRenderer,
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
