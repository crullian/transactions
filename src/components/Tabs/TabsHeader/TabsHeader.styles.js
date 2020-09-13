import styled from 'styled-components';

export const TabHeader = (() => {
  const getTextColor = ({ theme, isActive }) =>
    isActive ? theme.tabs.text.color.active : theme.tabs.text.color.inactive;
  const getFontSize = ({ theme }) => theme.tabs.text.size;
  const getVerticalPadding = ({ theme }) => theme.tabs.spacing.small;
  const getHorizontalMargin = ({ theme }) => theme.tabs.spacing.xlarge;
  const getBorderBottomHoverColor = ({ theme }) => theme.tabs.border.color.inactive;
  const getAnimationSpeed = ({ theme }) => theme.animations.speed.medium;
  return styled.div`
    display: flex;
    align-items: flex-end;
    padding: ${getVerticalPadding}px 0;
    margin: 0 ${getHorizontalMargin}px 0 0;
    cursor: pointer;
    color: ${getTextColor};
    font-size: ${getFontSize};
    border-bottom: 3px solid;
    border-color: transparent;
    transition: border-bottom ${getAnimationSpeed}ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      border-color: ${getBorderBottomHoverColor};
    }
  `;
})();

export const TabHeaderContentWrapper = (() => {
  return styled.div`
    display: flex;
  `;
})();
