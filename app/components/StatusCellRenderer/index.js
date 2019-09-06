import React from 'react';
import PropTypes from 'prop-types';
import ColoredChipCell from 'components/ColoredChipCell';

const STATUS_TO_COLOR = {
  'not making it': 'red',
  stuck: 'red',
  'working on it': 'yellow',
  done: 'green',
};

export const StatusCellRenderer = props => (
  <ColoredChipCell
    color={STATUS_TO_COLOR[props.value.toLowerCase()]}
    value={props.value}
  />
);

StatusCellRenderer.propTypes = {
  value: PropTypes.string,
};

export default StatusCellRenderer;
