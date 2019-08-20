/**
 *
 * TasksProvider
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTasksProvider from './selectors';
import reducer from './reducer';
import saga from './saga';

export function TasksProvider() {
  useInjectReducer({ key: 'tasksProvider', reducer });
  useInjectSaga({ key: 'tasksProvider', saga });

  return <div />;
}

TasksProvider.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tasksProvider: makeSelectTasksProvider(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TasksProvider);
