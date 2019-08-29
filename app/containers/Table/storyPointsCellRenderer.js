import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StoryPointsNumberWrapper = styled.span`
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  text-align: center;
`;

export default function StoryPointsCellRenderer(props) {
  return (
    <StoryPointsNumberWrapper>{props.value}</StoryPointsNumberWrapper>
  );
}

StoryPointsCellRenderer.propTypes = {
  value: PropTypes.number,
};
