/**
 *
 * IterationCellRenderer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NumberWrapper = styled.div`
  text-align: center;
  cursor: pointer;
  color: #737373;
`;

function IterationCellRenderer(props) {
  return <NumberWrapper>Iteration #{props.value}</NumberWrapper>;
}

IterationCellRenderer.propTypes = {};

export default IterationCellRenderer;

IterationCellRenderer.propTypes = {
  value: PropTypes.number,
};
