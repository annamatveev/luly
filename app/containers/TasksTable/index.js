import React, { Component } from 'react';
import { compose } from 'redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import withTasks from 'containers/WithTasks';
import TableWrapper from 'components/TableWrapper';
import { editTask, addTask, deleteTask } from 'services/TasksApiWrapper';
import PropTypes from 'prop-types';
import IterationCellRenderer from 'components/IterationCellRenderer';
import columnConfig from './columnConfig';
import makeGetContextMenuItems from './contextMenuParams';

class TasksTable extends Component {
  state = {
    columnDefs: columnConfig,
    defaultColDef: {
      editable: true,
      sortable: true,
      filter: true,
      resizable: true,
    },
    defaultGroupSortComparator(nodeA, nodeB) {
      if (nodeA.key > nodeB.key) {
        return -1;
      }
      if (nodeA.key < nodeB.key) {
        return 1;
      }
      return 0;
    },
    groupDefaultExpanded: -1,
    groupRowInnerRendererFramework: IterationCellRenderer,
  };

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
    setTimeout(() => params.api.sizeColumnsToFit(), 500);
  };

  onCellValueChanged = params => {
    editTask(params.data);
  };

  render() {
    return (
      <TableWrapper className="ag-theme-material">
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.props.tasks}
          defaultColDef={this.state.defaultColDef}
          onGridReady={this.onGridReady}
          onCellValueChanged={this.onCellValueChanged}
          getContextMenuItems={makeGetContextMenuItems(deleteTask, addTask)}
          groupUseEntireRow
          defaultGroupSortComparator={this.state.defaultGroupSortComparator}
          groupDefaultExpanded={this.state.groupDefaultExpanded}
          groupRowInnerRendererFramework={
            this.state.groupRowInnerRendererFramework
          }
          animateRows
        />
      </TableWrapper>
    );
  }
}

TasksTable.propTypes = {
  tasks: PropTypes.array,
};

export default compose(withTasks)(TasksTable);
