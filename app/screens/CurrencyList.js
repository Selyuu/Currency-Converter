import React, { Component } from 'react';
import { FlatList, Text, View, StatusBar } from 'react-native';

import currencies from '../data/currencies';

export default class CurrencyList extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar translucent={false} barStyle='default' />
				<FlatList
					data={currencies}
					renderItem={({ item }) => <Text>{item}</Text>}
					keyExtractor={item => item}
				/>
			</View>
		)
	}
}
