import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENCY = 'BRL';

export default class CurrencyList extends Component {

	handlePress = () => {
		console.log('row press');
	}

	render() {
		return (
			<View style={{ flex: 1, marginTop: 50 }}>
				<StatusBar translucent={false} barStyle='default' />
				<FlatList
					data={currencies}
					renderItem={({ item }) => (
						<ListItem
							text={item}
							selected={item === TEMP_CURRENCY}
							onPress={this.handlePress}
						/>
					)}
					keyExtractor={item => item}
					ItemSeparatorComponent={Separator}
				/>
			</View>
		)
	}
}
