import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import GenderCellRenderer from './genderCellRenderer';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          field: 'name',
          width: 100,
        },
        {
          field: 'gender',
          width: 90,
          cellRenderer: 'genderCellRenderer',
          cellEditor: 'agRichSelectCellEditor',
          cellEditorParams: {
            values: ['Male', 'Female'],
            cellRenderer: 'genderCellRenderer',
          },
        },
        {
          field: 'country',
          width: 100,
          cellEditor: 'agRichSelectCellEditor',
          cellEditorParams: {
            cellHeight: 50,
            values: ['Ireland', 'USA'],
          },
        },
        {
          field: 'city',
          width: 70,
          cellEditor: 'agRichSelectCellEditor',
          cellEditorParams(params) {
            const selectedCountry = params.data.country;
            const allowedCities = countyToCityMap(selectedCountry);
            return {
              values: allowedCities,
              formatValue(value) {
                return `${value} (${selectedCountry})`;
              },
            };
          },
        },
        {
          field: 'address',
          width: 200,
          cellEditor: 'agLargeTextCellEditor',
        },
      ],
      rowData: [
        {
          name: 'Bob Harrison',
          gender: 'Male',
          address:
            '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Mary Wilson',
          gender: 'Female',
          age: 11,
          address:
            '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Sadiq Khan',
          gender: 'Male',
          age: 12,
          address:
            '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Jerry Mane',
          gender: 'Male',
          age: 12,
          address:
            '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Bob Harrison',
          gender: 'Male',
          address:
            '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Mary Wilson',
          gender: 'Female',
          age: 11,
          address:
            '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Sadiq Khan',
          gender: 'Male',
          age: 12,
          address:
            '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Jerry Mane',
          gender: 'Male',
          age: 12,
          address:
            '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Bob Harrison',
          gender: 'Male',
          address:
            '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Mary Wilson',
          gender: 'Female',
          age: 11,
          address:
            '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Sadiq Khan',
          gender: 'Male',
          age: 12,
          address:
            '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Jerry Mane',
          gender: 'Male',
          age: 12,
          address:
            '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Bob Harrison',
          gender: 'Male',
          address:
            '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Mary Wilson',
          gender: 'Female',
          age: 11,
          address:
            '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Sadiq Khan',
          gender: 'Male',
          age: 12,
          address:
            '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Jerry Mane',
          gender: 'Male',
          age: 12,
          address:
            '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Bob Harrison',
          gender: 'Male',
          address:
            '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Mary Wilson',
          gender: 'Female',
          age: 11,
          address:
            '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Sadiq Khan',
          gender: 'Male',
          age: 12,
          address:
            '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Jerry Mane',
          gender: 'Male',
          age: 12,
          address:
            '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Bob Harrison',
          gender: 'Male',
          address:
            '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Mary Wilson',
          gender: 'Female',
          age: 11,
          address:
            '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Sadiq Khan',
          gender: 'Male',
          age: 12,
          address:
            '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
          city: 'Dublin',
          country: 'Ireland',
        },
        {
          name: 'Jerry Mane',
          gender: 'Male',
          age: 12,
          address:
            '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
          city: 'Dublin',
          country: 'Ireland',
        },
      ],
      frameworkComponents: { genderCellRenderer: GenderCellRenderer },
      defaultColDef: {
        editable: true,
        resizable: true,
      },
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  };

  onCellValueChanged(params) {
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
  }

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
            rowData={this.state.rowData}
            frameworkComponents={this.state.frameworkComponents}
            defaultColDef={this.state.defaultColDef}
            onGridReady={this.onGridReady}
            onCellValueChanged={this.onCellValueChanged.bind(this)}
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

export default GridExample;
