import styled from 'styled-components';

const COLOR_TO_DESIGN = {
  red: { background: 'e2445c40', text: '8d3b3b' },
  yellow: { background: 'faab3c40', text: '5c5000' },
  green: { background: '44e27b40', text: '123d14' },
  blue: { background: '44e27b40', text: '123d14' },
};

const ColoredChip = styled.span`
  padding: 5px 10px;
  border-radius: 50px;
  background-color: #${props => COLOR_TO_DESIGN[props.color.toLowerCase()].background};
  text-transform: capitalize;
  text-align: center;
  color: #${props => COLOR_TO_DESIGN[props.color.toLowerCase()].text};
  font-weight: bold;
  font-size: 11px;
`;

export default ColoredChip;
