// @flow

import styled from 'styled-components';

export const Container = (() => {
  const getTextColor = ({ theme }) => theme.tabs.text.color.active;
  return styled.div`
    height: 100%;
    color: ${getTextColor};
  `;
})();

export const HeaderScrollContainer = (() => {
  return styled.div`
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      height: 0;
    }
  `;
})();

export const TabHeadersContainer = (() => {
  return styled.div`
    display: flex;
    width: max-content;
  `;
})();

export const Indicator = (() => {
  const getBackgroundColor = ({ theme }) => theme.tabs.border.color.active;
  const getSliderLeft = ({ sliderLeft }) => sliderLeft;
  const getSliderWidth = ({ sliderWidth }) => sliderWidth;
  const getSliderTop = ({ sliderTop }) => sliderTop;
  return styled.div`
    position: absolute;
    top: ${getSliderTop}px;
    height: 3px;
    transform: translateX(${getSliderLeft}px);
    transition: transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1),
      width 300ms cubic-bezier(0.4, 0, 0.2, 1);
    width: ${getSliderWidth}px;
    background-color: ${getBackgroundColor};
  `;
})();

export const Content = (() => {
  const getDisplay = ({ active }) => (active ? 'initial' : 'none');
  return styled.div`
    display: ${getDisplay};
  `;
})();
