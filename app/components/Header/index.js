/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';

const HeaderWrapper = styled.h1`
  padding-bottom: 12px;
  padding-top: 8px;
  padding-left: 32px;
  background: white;
  margin: 0 0 32px;
  box-shadow: 0px 2px 2px 0px #c4c4c4;
  border-top: 4px solid rgba(22, 57, 255, 0.64);
`;
const TabName = styled.span`
  font-weight: 200;
  font-size: 20px;
`;

const TeamName = styled.span`
  font-weight: 600;
  font-size: 24px;
  margin-right: 10px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <TeamName>
        <FormattedMessage {...messages.teamName} />
      </TeamName>
      <TabName>
        <FormattedMessage {...messages.header} />
      </TabName>
    </HeaderWrapper>
  );
}

Header.propTypes = {};

export default Header;
