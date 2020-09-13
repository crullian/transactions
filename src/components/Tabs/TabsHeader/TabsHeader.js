import React from 'react';

import * as Styles from './TabsHeader.styles';

const TabHeader = ({ tabHeader, onTabHeaderClick, innerRef, isActive }) => (
  <Styles.TabHeader ref={innerRef} isActive={isActive} onClick={onTabHeaderClick}>
    <Styles.TabHeaderContentWrapper>
      <div>{tabHeader.content}</div>
    </Styles.TabHeaderContentWrapper>
  </Styles.TabHeader>
);

export default TabHeader;