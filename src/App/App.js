import React, { useEffect } from 'react';
import welcomeIcon from '../assets/welcome.jpg';
import Tabs from '../components/Tabs';
import Transactions from '../components/Transactions';
import loader from '../assets/loader.gif'

import * as Styles from './App.styles';

const tabHeaders = [
	{content: 'Bills',},
	{content: 'Transactions'}
];

function App({ transactions, isFetching, error, fetchTransactions }) {

	useEffect(() => {
		fetchTransactions();
	}, []);


  return (
	  	<Styles.Section>
	    	<img src={welcomeIcon} alt="Welcome!"/>
	    	{isFetching ? (
					<img src={loader} alt="loading..." />
				) : (
		    	<Tabs tabHeaders={tabHeaders}>
		    		<Transactions transactionList={transactions?.filter(item => item.isBill)} />
		    		<Transactions transactionList={transactions?.filter(item => !item.isBill)} />
		    	</Tabs>
	    	)
	    }
	  	</Styles.Section>
	  );
}

export default App;
