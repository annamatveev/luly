import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const JiraIssueLabelWrapper = styled.div`
  text-align: center;
  cursor: pointer;
  color: #658de8;
  text-decoration: underline;
`;
export default function JiraIssueCellRenderer(props) {
  return (
    <Button href={`http://jira/browser/${props.value}`} target="_blank">
      <JiraIssueLabelWrapper>{props.value}</JiraIssueLabelWrapper>
    </Button>
  );
}

JiraIssueCellRenderer.propTypes = {
  value: PropTypes.string,
};
