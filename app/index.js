import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
	$primaryBlue: '#3e4982',
})

export default () => <Home />;
