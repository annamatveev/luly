
function countyToCityMap(match) {
  const map = {
    Ireland: ['Dublin', 'Cork', 'Galway'],
    USA: ['New York', 'Los Angeles', 'Chicago', 'Houston'],
  };
  return map[match];
}

export default [
  {
    field: 'description',
    width: 100,
  },
  {
    field: 'owner',
    width: 100,
  },
  {
    field: 'status',
    width: 100,
  },
  {
    field: 'due_date',
    width: 100,
  },
  {
    field: 'priority',
    width: 100,
  },
];
