/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Table from '../Table';

export default function HomePage() {
  return (
    <React.Fragment>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <div style={{ height: '100vh' }}>
        <Table />
      </div>
    </React.Fragment>
  );
}
