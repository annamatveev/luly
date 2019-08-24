import React, { Component } from 'react';
import { compose } from 'redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import withTasks from 'containers/WithTasks';
import columnConfig from './columnConfig';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

class Table extends Component {
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
  };

  onCellValueChanged = params => {
    const colId = params.column.getId();

  };

  render() {
    return (
      <div
        style={{
          height: '100%',
          width: '80%',
          margin: '0 auto',
        }}
        className="ag-theme-material"
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.props.tasks}
          defaultColDef={this.state.defaultColDef}
          onGridReady={this.onGridReady}
          onCellValueChanged={this.onCellValueChanged}
          animateRows
        />
      </div>
    );
  }
}

export default compose(withTasks)(Table);
