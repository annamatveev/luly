import React from 'react';
import Table from '../Table';
import TasksProvider from '../TasksProvider';
import Header from 'components/Header';

export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <TasksProvider>
        <div style={{ height: 'calc(100vh - 120px)' }}>
          <Table />
        </div>
      </TasksProvider>
    </React.Fragment>
  );
}
