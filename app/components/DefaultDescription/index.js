import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const DefaultDescriptionWrapper = styled.span`
  color: grey;
  margin-left: 4px;
`;

export const DefaultDescription = props => (
  <React.Fragment>
    <ErrorOutlineIcon fontSize="small" color="error" />
    <DefaultDescriptionWrapper>{props.message}</DefaultDescriptionWrapper>
  </React.Fragment>
);

DefaultDescription.propTypes = {
  message: PropTypes.string,
};
export default DefaultDescription;
