import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import toMaterialStyle from 'material-color-hash';

const useStyles = makeStyles({
  avatar: {
    width: '25px',
    height: '25px',
    'font-size': '12px',
    margin: 10,
  },
});

export default function OwnerCellRenderer(props) {
  const classes = useStyles();

  const acronym = (
    props.value.charAt(0) +
    props.value
      .split(' ')
      .slice(-1)[0]
      .charAt(0)
  ).toUpperCase();
  return (
    <React.Fragment>
      <Grid container>
        <Avatar
          className={classes.avatar}
          style={{
            backgroundColor: toMaterialStyle(acronym, '700').backgroundColor,
          }}
        >
          {acronym}
        </Avatar>
        <span>{props.value}</span>
      </Grid>
    </React.Fragment>
  );
}

OwnerCellRenderer.propTypes = {
  value: PropTypes.string,
};
