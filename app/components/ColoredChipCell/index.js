import React from 'react';
import styled from 'styled-components';
import ColoredChip from 'components/ColoredChip';
import PropTypes from 'prop-types';

const ChipWrapper = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const ColoredChipCell = props => (
  <ChipWrapper>
    <ColoredChip color={props.color}>{props.value}</ColoredChip>
  </ChipWrapper>
);

ColoredChipCell.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
};
export default ColoredChipCell;
