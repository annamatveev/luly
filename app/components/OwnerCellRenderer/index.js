import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import toMaterialStyle from 'material-color-hash';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: '25px',
    height: '25px',
    'font-size': '11px',
    margin: 10,
  },
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

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
        <Tooltip TransitionComponent={Zoom} title={props.value} placement="top">
          <Avatar
            className={classes.avatar}
            style={{
              backgroundColor: toMaterialStyle(acronym, '100').backgroundColor,
              color: toMaterialStyle(acronym, '800').backgroundColor,
            }}
          >
            {acronym || '?'}
          </Avatar>
        </Tooltip>
      </Grid>
    </React.Fragment>
  );
}

OwnerCellRenderer.propTypes = {
  value: PropTypes.string,
};
