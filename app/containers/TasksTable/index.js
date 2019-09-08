import React, { Component } from 'react';
import { compose } from 'redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import withTasks from 'containers/WithTasks';
import TableWrapper from 'components/TableWrapper';
import { editTask } from 'services/TasksApiWrapper';
import PropTypes from 'prop-types';
import columnConfig from './columnConfig';
import getContextMenuItems from './contextMenuParams';

class TasksTable extends Component {
  state = {
    columnDefs: columnConfig,
    defaultColDef: {
      editable: true,
      sortable: true,
      filter: true,
      resizable: true,
    },
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
          getContextMenuItems={getContextMenuItems}
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