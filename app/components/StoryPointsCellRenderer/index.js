import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

const StyledBadge = withStyles(theme => ({
  badge: {
    top: '50%',
    right: -3,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
      }`,
  },
}))(Badge);

export default function StoryPointsCellRenderer(props) {
  return (
    <StyledBadge
      badgeContent={props.value}
      color={props.value > 3 ? 'secondary' : 'primary'}
    >
      <ImportContactsIcon color="disabled" />
    </StyledBadge>
  );
}

StoryPointsCellRenderer.propTypes = {
  value: PropTypes.number,
};
