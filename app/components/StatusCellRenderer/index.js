import React from 'react';
import PropTypes from 'prop-types';
import ColoredChipCell from 'components/ColoredChipCell';

const STATUS_TO_COLOR = {
  'not making it': 'red',
  stuck: 'red',
  'working on it': 'yellow',
  'next in line': 'grey',
  done: 'green',
  none: 'grey',
};

export const StatusCellRenderer = props => (
  <React.Fragment>
    <ColoredChipCell
      color={
        STATUS_TO_COLOR[(props.value && props.value.toLowerCase()) || 'none']
      }
      value={props.value || 'None'}
    />
  </React.Fragment>
);

StatusCellRenderer.propTypes = {
  value: PropTypes.string,
};

export default StatusCellRenderer;
