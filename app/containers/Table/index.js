import React, { Component } from 'react';
import { compose } from 'redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import withTasks from 'containers/WithTasks';
import columnConfig from './columnConfig';
import GenderCellRenderer from './genderCellRenderer';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Table extends Component {
  state = {
    columnDefs: columnConfig,
    frameworkComponents: { genderCellRenderer: GenderCellRenderer },
    defaultColDef: {
      editable: true,
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
    if (colId === 'country') {
      const selectedCountry = params.data.country;
      const selectedCity = params.data.city;
      const allowedCities = countyToCityMap(selectedCountry);
      const cityMismatch = allowedCities.indexOf(selectedCity) < 0;
      if (cityMismatch) {
        params.node.setDataValue('city', null);
      }
    }
  };

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.props.tasks}
            frameworkComponents={this.state.frameworkComponents}
            defaultColDef={this.state.defaultColDef}
            onGridReady={this.onGridReady}
            onCellValueChanged={this.onCellValueChanged}
          />
        </div>
      </div>
    );
  }
}

function countyToCityMap(match) {
  const map = {
    Ireland: ['Dublin', 'Cork', 'Galway'],
    USA: ['New York', 'Los Angeles', 'Chicago', 'Houston'],
  };
  return map[match];
}

export default compose(withTasks)(Table);
