import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { loadTasks } from './actions';

export function TasksProvider(props) {
  useInjectReducer({ key: 'tasksProvider', reducer });
  useInjectSaga({ key: 'tasksProvider', saga });

  useEffect(() => props.loadTasks(), []);

  return props.children;
}

TasksProvider.propTypes = {
  loadTasks: PropTypes.func.isRequired,
  children: PropTypes.node,
};

function mapDispatchToProps(dispatch) {
  return {
    loadTasks: () => {
      dispatch(loadTasks());
    },
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TasksProvider);
