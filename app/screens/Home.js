import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/InputWithButton';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE = 'GBP';
const TEMP_QUOTE = 'EUR';
const BASE_PRICE = '100';
const QUOTE_PRICE = '88.45';
const TEMP_RATE = 0.8845;
const TEMP_DATE = new Date();

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

	handleSwap = () => {
		console.log('swapping!');
	}

	pressGear = () => {
		console.log('option gear pressed!');
	}

	// RENDER ===========================

	render() {
		return (
			<Container>
				<StatusBar translucent={false} barStyle='light-content' />
				<Header
					onPress={this.pressGear}
				/>
				<KeyboardAvoidingView behavior='padding'>
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
					<LastConverted
						baseCurrency={TEMP_BASE}
						quoteCurrency={TEMP_QUOTE}
						conversionRate={TEMP_RATE}
						currentDate={TEMP_DATE}

					/>
					<ClearButton
						text='REVERSE'
						onPress={this.handleSwap}
					/>
				</KeyboardAvoidingView>
			</Container>
		)
	}
}
