import styled from 'styled-components';

const SingleNumberCell = styled.div`
  background-color: #${props => props.color};
  text-transform: capitalize;
  text-align: center;
  font-size: 14px;
`;

export default SingleNumberCell;
