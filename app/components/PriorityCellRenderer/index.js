import React from 'react';
import PropTypes from 'prop-types';
import ColoredChipCell from 'components/ColoredChipCell';

const PRIORITY_TO_COLOR = {
  high: 'red',
  medium: 'yellow',
  low: 'green',
  interrupt: 'blue',
};

export const PriorityCellRenderer = props => (
  <ColoredChipCell
    color={PRIORITY_TO_COLOR[props.value.toLowerCase()]}
    value={props.value}
  />
);

PriorityCellRenderer.propTypes = {
  value: PropTypes.string,
};

export default PriorityCellRenderer;
