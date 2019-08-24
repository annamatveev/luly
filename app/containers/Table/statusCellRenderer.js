import React from 'react';
import styled from 'styled-components';

const StatusWrapper = styled.div`
  background-color: #${props => generateColor(props.priority)};
`;

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
  <StatusWrapper priority={props.value}>{props.value}</StatusWrapper>
);

export default StatusCellRenderer;
