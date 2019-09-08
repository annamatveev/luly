import JiraIssueCellRenderer from 'components/JiraIssueCellRenderer';
import OwnerCellRenderer from 'components/OwnerCellRenderer';
import statusCellRenderer from 'components/StatusCellRenderer';
import priorityCellRenderer from 'components/PriorityCellRenderer';
import StoryPointsCellRenderer from 'components/StoryPointsCellRenderer';
import DescriptionCellRenderer from 'components/DescriptionCellRenderer';
import PriorityComparator from './priorityComparator';

export default [
  {
    field: 'description',
    minWidth: 100,
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
    width: 30,
    cellRendererFramework: OwnerCellRenderer,
  },
  {
    field: 'status',
    width: 30,
    minWidth: 30,
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
    width: 30,
    minWidth: 30,
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
    width: 43,
    minWidth: 43,
    cellRendererFramework: StoryPointsCellRenderer,
  },
  {
    field: 'actual_sp',
    headerName: 'Actual Effort',
    width: 40,
    minWidth: 40,
    cellRendererFramework: StoryPointsCellRenderer,
  },
  {
    field: 'jira_issue',
    headerName: 'Jira Issue',
    width: 40,
    minWidth: 40,
    cellRendererFramework: JiraIssueCellRenderer,
  },
];
