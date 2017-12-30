import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

// REDUX
import { Provider } from 'react-redux';
import store from './config/store';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';


EStyleSheet.build({
	$primaryBlue: '#3e4982',
	$primaryOrange: '#d57a66',
	$primaryGreen: '#00bd9d',
	$primaryPurple:'#9e768f',

	$white: '#fff',
	$black: '#000',
	$border: '#e2e2e2',
	$inputText: '#797979',
	$lightGray: '#f0f0f0',
	$darkText: '#343434',
})

export default () => (
<Provider store={store}>
	<AlertProvider>
		<Navigator onNavigationStateChange={null}/>
	</AlertProvider>
</Provider>
)
