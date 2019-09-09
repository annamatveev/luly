import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NumberWrapper = styled.div`
  text-align: center;
  cursor: pointer;
  color: #737373;
`;

export default function NumberCellRenderer(props) {
  return <NumberWrapper>{props.value}</NumberWrapper>;
}

NumberCellRenderer.propTypes = {
  value: PropTypes.number,
};
