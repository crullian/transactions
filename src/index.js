import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { transactionReducer } from './reducers/transactions'
import { ThemeProvider } from 'styled-components';
import { StyleConstants, APIConstants } from './shared/constants';
import './index.scss';
import AppContainer from './App/AppContainer';

let store = createStore(transactionReducer);

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={StyleConstants}>
			<AppContainer />
	  </ThemeProvider>
	</Provider>,
	document.getElementById('root')
);