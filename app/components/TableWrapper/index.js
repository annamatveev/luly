import styled from 'styled-components';

const TableWrapper = styled.div`
  box-shadow: 0px 2px 0px 1px #c4c4c4;
  margin-bottom: 20px;

  // Override ag-grid div to prevent horizontal scroll bar when not needed
  .ag-center-cols-viewport {
    width: 101%;
  }
`;

export default TableWrapper;
