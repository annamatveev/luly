import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StoryPointsWrapper = styled.div`
  text-align: center;
  cursor: pointer;
  color: #737373;
`;

export default function StoryPointsCellRenderer(props) {
  return <StoryPointsWrapper>{props.value}</StoryPointsWrapper>;
}

StoryPointsCellRenderer.propTypes = {
  value: PropTypes.number,
};
