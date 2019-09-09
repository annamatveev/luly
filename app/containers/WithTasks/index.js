import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectTasksData,
  makeSelectLoading,
} from 'containers/TasksProvider/selectors';

const mapStateToProps = createStructuredSelector({
  tasks: makeSelectTasksData(),
  loading: makeSelectLoading(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default function withTasks(WrappedComponent) {
  return compose(withConnect)(WrappedComponent);
}
