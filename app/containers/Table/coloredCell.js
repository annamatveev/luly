import styled from 'styled-components';

const ColoredCell = styled.div`
  background-color: #${props => props.color};
  text-transform: capitalize;
  text-align: center;
  color: white;
`;

export default ColoredCell;
