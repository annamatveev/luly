import React from 'react';
import PropTypes from 'prop-types';
import ColoredCell from './coloredCell';

function generateColor(type) {
  switch (type.toLowerCase()) {
    case 'high':
      return 'e2445c';
    case 'medium':
      return 'faab3c';
    case 'low':
      return '00c875';
    default:
      return '0086c0';
  }
}

export const PriorityCellRenderer = props => (
  <ColoredCell color={generateColor(props.value)}>{props.value}</ColoredCell>
);

PriorityCellRenderer.propTypes = {
  value: PropTypes.string,
};

export default PriorityCellRenderer;
