import React from 'react';
import PropTypes from 'prop-types';
import ColoredCell from './coloredCell';

function generateColor(type) {
  switch (type.toLowerCase()) {
    case 'not making it':
      return 'e2445c';
    case 'working on it':
      return 'faab3c';
    case 'done':
      return '00c875';
    case 'stuck':
      return 'e2445c';
    default:
      return '0086c0';
  }
}

export const StatusCellRenderer = props => (
  <ColoredCell color={generateColor(props.value)}>{props.value}</ColoredCell>
);

StatusCellRenderer.propTypes = {
  value: PropTypes.string,
};

export default StatusCellRenderer;
