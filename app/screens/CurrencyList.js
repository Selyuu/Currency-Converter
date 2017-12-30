import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

// REDUX
import { connect } from 'react-redux';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

const TEMP_CURRENCY = 'BRL';

class CurrencyList extends Component {

	static propTypes = {
		navigation: PropTypes.object,
		dispatch: PropTypes.func,
	}

	handlePress = (currency) => {
		const { type } = this.props.navigation.state.params;
		type === 'base' ?
		this.props.dispatch(changeBaseCurrency(currency)) :
		this.props.dispatch(changeQuoteCurrency(currency));
		this.props.navigation.goBack(null);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar translucent={false} barStyle='default' />
				<FlatList
					data={currencies}
					renderItem={({ item }) => (
						<ListItem
							text={item}
							selected={item === TEMP_CURRENCY}
							onPress={() => this.handlePress(item)}
						/>
					)}
					keyExtractor={item => item}
					ItemSeparatorComponent={Separator}
				/>
			</View>
		)
	}
}

export default connect()(CurrencyList);
