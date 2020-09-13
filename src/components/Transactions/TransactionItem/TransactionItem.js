import React, { useState } from 'react';

import * as Styles from './TransactionItem.styles';

const TransactionItem = ({ name, selected, handleSetSelected, transactionList }) => {
	return (
		<Styles.TransactionItemContainer onClick={handleSetSelected} selected={selected}>
			{name}
			{selected &&
				<Styles.TransactionInfo selected={selected}>
					{transactionList.map(transaction => <h4 key={transaction.id}>{transaction.date}</h4>)}
				</Styles.TransactionInfo>
			}
		</Styles.TransactionItemContainer>
	);
}

export default TransactionItem;