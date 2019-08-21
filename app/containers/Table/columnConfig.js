
function countyToCityMap(match) {
  const map = {
    Ireland: ['Dublin', 'Cork', 'Galway'],
    USA: ['New York', 'Los Angeles', 'Chicago', 'Houston'],
  };
  return map[match];
}

export default [
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
]
