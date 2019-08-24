import styled from 'styled-components';

const ColoredCell = styled.div`
  background-color: #${props => props.color};
`;

export default ColoredCell;
