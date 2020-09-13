import { connect } from 'react-redux';
import { fetchTransactions } from '../actions/transactions'
import App from './App';

const mapStateToProps = state => ({
	isFetching: state.isFetching,
	error: state.error,
  transactions: state.transactions
});

const mapDispatchToProps = dispatch => ({
	fetchTransactions: () => fetchTransactions(dispatch)
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;