/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';
import Table from '../Table';
import TasksProvider from '../TasksProvider';

const HeaderWrapper = styled.h1`
  padding-bottom: 12px;
  margin: 0;
  padding-top: 8px;
  padding-left: 32px;
  background: white;
  margin-bottom: 32px;
  box-shadow: 0px 2px 2px 0px #c4c4c4;
`;
const TabName = styled.span`
  font-weight: 200;
  font-size: 20px;
`;

const TeamName = styled.span`
  font-weight: 600;
  font-size: 24px;
`;

export default function HomePage() {
  return (
    <React.Fragment>
      <HeaderWrapper>
        <TeamName>
          <FormattedMessage {...messages.teamName} />
        </TeamName>
        <TabName>
          <FormattedMessage {...messages.header} />
        </TabName>
      </HeaderWrapper>
      <TasksProvider>
        <div style={{ height: 'calc(100vh - 120px)'}}>
          <Table />
        </div>
      </TasksProvider>
    </React.Fragment>
  );
}
