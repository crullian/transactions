import styled from 'styled-components';

export const TransactionItemContainer = (() => {
	const getSelectedShadow = ({selected}) =>
		selected 
		? '0px 1px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);'
		: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)';

	return styled.div`
		width: 500px;
	  height: auto;
	  background: #F3F3F3;
	  box-shadow: ${getSelectedShadow};
	  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
	  padding: 8px;
	  margin-bottom: 8px;
	  cursor: pointer;
	  border-radius: 2px;

	  &:hover {
	  	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	  }
	`;
})();

export const TransactionInfo = (() => {
	const getSelectedHeight = ({selected}) =>
		selected
		? '1000px'
		: '0px';

	return styled.div`
		height: auto;
		max-height: ${getSelectedHeight}
		transition: max-height 1.25s cubic-bezier(0.4, 0, 0.2, 1);
	`;
})();