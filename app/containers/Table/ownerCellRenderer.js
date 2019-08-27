import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  avatar: {
    width: '20px',
    height: '20px',
    'font-size': '15px',
    margin: 10
  },
});

export default function OwnerCellRenderer(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container>
        <Avatar className={classes.avatar}>{props.value.charAt(0)}</Avatar>
        <span>{props.value}</span>
      </Grid>

    </React.Fragment>
  );
}

OwnerCellRenderer.propTypes = {
  value: PropTypes.string,
};
