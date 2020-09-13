import React, { useEffect, useState } from 'react';
import TransactionItem from './TransactionItem';

import * as Styles from './Transactions.styles';

const Transactions = ({ transactionList }) => {
	const [selectedId, setSelectedId] = useState(null)
	const handleClickTransactionItem = id =>
		id !== selectedId ? setSelectedId(id) : setSelectedId(null);

	return (
		<Styles.TransactionsContainer>
			{ transactionList?.map(transaction => {
				const { name, id, transactions } = transaction;
				return (
					<TransactionItem
						key={id}
						name={name}
						handleSetSelected={() => handleClickTransactionItem(id)}
						selected={selectedId === id}
						transactionList={transactions}
					/>
				);
			})}
		</Styles.TransactionsContainer>
	);
}

export default Transactions;