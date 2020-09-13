export const transactionReducer = function (state = { isFetching: false, transactions: null, error: false}, action) {
  switch (action.type) {
    case 'GET_TRANSACTIONS_PENDING':
      return {
      	...state,
      	isFetching: true,
      };
    case 'GET_TRANSACTIONS_SUCCESS':
      return {
      	...state,
      	isFetching: false,
      	transactions: action.payload,
      };
    case 'GET_TRANSACTIONS_FAILED':
      return {
      	...state,
      	isFetching: false,
      	error: true,
      };
    default:
      return state;
  }
};
