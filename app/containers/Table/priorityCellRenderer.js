import React from 'react';
import PropTypes from 'prop-types';
import ColoredCell from './coloredCell';

function generateColor(type) {
  switch (type.toLowerCase()) {
    case 'high':
      return 'a5c4a2';
    case 'medium':
      return 'ef6969';
    case 'low':
      return '62ace5';
    default:
      return 'caafe0';
  }
}

export const PriorityCellRenderer = props => (
  <ColoredCell color={generateColor(props.value)}>{props.value}</ColoredCell>
);

PriorityCellRenderer.propTypes = {
  value: PropTypes.string,
};

export default PriorityCellRenderer;
