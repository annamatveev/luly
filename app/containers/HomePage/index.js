import React from 'react';
import Header from 'components/Header';
import TasksTable from '../TasksTable';
import TasksProvider from '../TasksProvider';

export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <TasksProvider>
        <TasksTable />
      </TasksProvider>
    </React.Fragment>
  );
}
