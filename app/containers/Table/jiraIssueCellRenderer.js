import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default function JiraIssueCellRenderer(props) {
  return (
    <Button href={`http://jira/browser/${props.value}`}>
      {props.value}
    </Button>
  );
}


JiraIssueCellRenderer.propTypes = {
  value: PropTypes.string,
};
