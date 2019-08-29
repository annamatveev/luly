import statusCellRenderer from './statusCellRenderer';
import priorityCellRenderer from './priorityCellRenderer';
import OwnerCellRenderer from './ownerCellRenderer';
import StoryPointsCellRenderer from './storyPointsCellRenderer';
import JiraIssueCellRenderer from './jiraIssueCellRenderer';

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
    width: 30,
    cellRendererFramework: OwnerCellRenderer,
  },
  {
    field: 'status',
    width: 40,
    cellStyle: { padding: 0 },
    cellRendererFramework: statusCellRenderer,
    cellEditor: 'agRichSelectCellEditor',
    cellEditorParams: {
      values: ['Stuck', 'Working on it', 'Done', 'Not making it'],
    },
  },
  {
    field: 'priority',
    width: 50,
    cellRendererFramework: priorityCellRenderer,
    cellEditor: 'agRichSelectCellEditor',
    cellEditorParams: {
      values: ['High', 'Medium', 'Low', 'Interrupt'],
    },
  },
  {
    field: 'estimated_sp',
    headerName: 'Estimated SP',
    width: 40,
    cellRendererFramework: StoryPointsCellRenderer,
  },
  {
    field: 'actual_sp',
    headerName: 'Actual SP',
    width: 40,
    cellRendererFramework: StoryPointsCellRenderer,
  },
  {
    field: 'jira_issue',
    headerName: 'Jira Issue',
    width: 40,
    cellRendererFramework: JiraIssueCellRenderer,

  },
];
