import { APIConstants } from '../shared/constants';

export const fetchTransactions = dispatch => {
	dispatch({type: 'GET_TRANSACTIONS_PENDING'});
	setTimeout( async () => {
		try {
	    const result = await fetch(`${APIConstants.base}bills`, {});
	    const json = await result.json();
			return dispatch({type: 'GET_TRANSACTIONS_SUCCESS', payload: json});
	  } catch (err) {
	    console.error(err);
			return dispatch({type: 'GET_TRANSACTIONS_FAILED', error: true});
	  }
	}, 3000)
}

// export const removeBill = dispatch => {
// 	dispatch({type: 'REMOVE_BILL'});
// }