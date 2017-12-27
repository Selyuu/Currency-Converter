import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
	$primaryBlue: '#3e4982',
	$white: '#fff',
	$black: '#000',
	$border: '#e2e2e2',
	$inputText: '#797979',
	$lightGray: '#f0f0f0',
	$darkText: '#343434',
})

export default () => <CurrencyList />;
