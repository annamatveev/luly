import JiraIssueCellRenderer from 'components/JiraIssueCellRenderer';
import OwnerCellRenderer from 'components/OwnerCellRenderer';
import statusCellRenderer from 'components/StatusCellRenderer';
import priorityCellRenderer from 'components/PriorityCellRenderer';
import NumberCellRenderer from 'components/NumberCellRenderer';
import DescriptionCellRenderer from 'components/DescriptionCellRenderer';
import PriorityComparator from './priorityComparator';

export default [
  {
    field: 'description',
    minWidth: 200,
    maxWidth: 500,
    cellEditor: 'agLargeTextCellEditor',
    cellEditorParams: {
      maxLength: '600', // override the editor defaults
      cols: '60',
      rows: '3',
    },
    cellRendererFramework: DescriptionCellRenderer,
  },
  {
    field: 'owner',
    width: 70,
    minWidth: 70,
    cellRendererFramework: OwnerCellRenderer,
  },
  {
    field: 'status',
    width: 55,
    minWidth: 55,
    cellStyle: { padding: 0 },
    cellRendererFramework: statusCellRenderer,
    cellEditor: 'agRichSelectCellEditor',
    cellEditorParams: {
      values: [
        'Stuck',
        'Working on it',
        'Done',
        'Not making it',
        'Next in line',
      ],
    },
  },
  {
    field: 'priority',
    width: 70,
    minWidth: 70,
    cellRendererFramework: priorityCellRenderer,
    cellEditor: 'agRichSelectCellEditor',
    cellEditorParams: {
      values: ['High', 'Medium', 'Low', 'Interrupt'],
    },
    comparator: PriorityComparator,
  },
  {
    field: 'estimated_sp',
    headerName: 'Estimated Effort',
    width: 70,
    minWidth: 70,
    cellRendererFramework: NumberCellRenderer,
  },
  {
    field: 'actual_sp',
    headerName: 'Actual Effort',
    width: 70,
    minWidth: 70,
    cellRendererFramework: NumberCellRenderer,
  },
  {
    field: 'jira_issue',
    headerName: 'Jira Issue',
    width: 70,
    minWidth: 70,
    cellRendererFramework: JiraIssueCellRenderer,
  },
  {
    field: 'iteration',
    headerName: 'Iteration',
    width: 70,
    minWidth: 70,
    rowGroup: true,
    cellRendererFramework: NumberCellRenderer,
  },
];
