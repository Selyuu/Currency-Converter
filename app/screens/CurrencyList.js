import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

// REDUX
import { connect } from 'react-redux';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

class CurrencyList extends Component {

	static propTypes = {
		navigation: PropTypes.object,
		dispatch: PropTypes.func,
		baseCurrency: PropTypes.string,
		quoteCurrency: PropTypes.string,
		primaryColor: PropTypes.string,
	}

	handlePress = (currency) => {
		const { type } = this.props.navigation.state.params;
		type === 'base' ?
		this.props.dispatch(changeBaseCurrency(currency)) :
		this.props.dispatch(changeQuoteCurrency(currency));
		this.props.navigation.goBack(null);
	}

// RENDER ========================

	render() {
		let comparisonCurrency = this.props.baseCurrency;
		this.props.navigation.state.params.type === 'quote' ?
		comparisonCurrency = this.props.quoteCurrency : false;
		return (
			<View style={{ flex: 1 }}>
				<StatusBar translucent={false} barStyle='default' />
				<FlatList
					data={currencies}
					renderItem={({ item }) => (
						<ListItem
							text={item}
							selected={item === comparisonCurrency}
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

const mapStateToProps = state => {
	return {
		baseCurrency: state.currencies.baseCurrency,
		quoteCurrency: state.currencies.quoteCurrency,
		primaryColor: state.theme.primaryColor,
	}
}

export default connect(mapStateToProps)(CurrencyList);
