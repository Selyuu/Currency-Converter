import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/InputWithButton';

const TEMP_BASE = 'GBP';
const TEMP_QUOTE = 'EUR';
const BASE_PRICE = '100';
const QUOTE_PRICE = '88.45';

export default class Home extends Component {

	pressBase = () => {
		console.log('base');
	}

	pressQuote = () => {
		console.log('quote');
	}

	handleTextChange = (text) => {
		console.log('new text!', text);
	}

	// RENDER ===========================

	render() {
		return (
			<Container>
				<StatusBar translucent={false} barStyle="light-content" />
				<Logo />
				<InputWithButton
					buttonText={TEMP_BASE}
					onPress={this.pressBase}
					defaultValue={BASE_PRICE}
					keyboardType='numeric'
					onChangeText={this.handleTextChange}
				/>
				<InputWithButton
					buttonText={TEMP_QUOTE}
					onPress={this.pressQuote}
					defaultValue={QUOTE_PRICE}
					editable={false}
				/>
			</Container>
		)
	}
}
