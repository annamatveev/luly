import React from 'react';
import PropTypes from 'prop-types';
import ColoredCell from './coloredCell';

function generateColor(type) {
  switch (type.toLowerCase()) {
    case 'not making it':
      return 'a5c4a2';
    case 'working on it':
      return 'ef6969';
    case 'done':
      return '62ace5';
    default:
      return 'caafe0';
  }
}

export const StatusCellRenderer = props => (
  <ColoredCell color={generateColor(props.value)}>{props.value}</ColoredCell>
);

StatusCellRenderer.propTypes = {
  value: PropTypes.string,
};

export default StatusCellRenderer;
