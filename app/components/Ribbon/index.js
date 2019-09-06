import styled from 'styled-components';

const Ribbon = styled.span`
  clip-path: polygon(
    0 0,
    calc(100% - 8px) 0,
    100% 50%,
    calc(100% - 8px) 100%,
    0 100%
  );
  background-color: #eaeaea;
  padding: 4px 8px 4px 4px;
  font-size: 12px;
  color: grey;
  margin-right: 8px;
`;

export default Ribbon;
