import React, { useState, createRef, useEffect } from 'react';

import TabsHeader from './TabsHeader';
import * as Styles from './Tabs.styles';


const Tabs = ({ tabHeaders, children, onTabChange, location, match }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderLeft, setSliderLeft] = useState(0);
  const [sliderTop, setSliderTop] = useState(0);
  const tabHeaderRefList = Array(tabHeaders.length)
    .fill(0)
    .map(() => createRef());

  const handleOnTabChange = nextIndex => onTabChange ? onTabChange(tabHeaders[nextIndex], nextIndex) : null;

  const updateSlider = () => {
    setSliderWidth(tabHeaderRefList[tabIndex].current?.offsetWidth);
    setSliderLeft(tabHeaderRefList[tabIndex].current?.offsetLeft);
    setSliderTop(tabHeaderRefList[tabIndex].current?.clientHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateSlider);
    if (tabHeaderRefList[tabIndex] && tabHeaderRefList[tabIndex].current) {
      updateSlider();
      handleOnTabChange(tabIndex);
    }
    return () => window.removeEventListener('resize', updateSlider);
  }, [tabIndex]);

  useEffect(() => {
    const nextIndex = tabHeaders.findIndex(
      ({ matchUrl }) => matchUrl && matchUrl({ location, match }),
    );
    if (nextIndex > -1) {
      setTabIndex(nextIndex);
      handleOnTabChange(nextIndex);
    }
  }, [JSON.stringify(location)]);

  return (
    <Styles.Container>
      <Styles.HeaderScrollContainer>
        <Styles.TabHeadersContainer>
          {tabHeaders.map((child, index) => (
            <TabsHeader
              key={`tab-header-${index}`}
              tabHeader={child}
              onTabHeaderClick={() => setTabIndex(index)}
              innerRef={tabHeaderRefList[index]}
              isActive={tabIndex === index}
            />
          ))}
          <Styles.Indicator
            sliderLeft={sliderLeft}
            sliderWidth={sliderWidth}
            sliderTop={sliderTop}
          />
        </Styles.TabHeadersContainer>
      </Styles.HeaderScrollContainer>

      {React.Children.toArray(children).map((child, i) => (
        <Styles.Content key={i} active={i === tabIndex}>
          {child}
        </Styles.Content>
      ))}
    </Styles.Container>
  );
};

export default Tabs;