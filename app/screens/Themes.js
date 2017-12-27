import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
	$blue: '$primaryBlue',
	$green: '$primaryGreen',
	$orange: '$primaryOrange'
	$purple: '$primaryPurple',
})

export default class Themes extends Component {
	handleThemePress = () => {
		console.log('theme color pressed');
	}
	render() {
		return (
			<ScrollView style={{marginTop: 40}}>
				<StatusBar translucent={false} barStyle='default'/>
				<ListItem
					text='Blue'
					handleThemePress={this.handleThemePress}
					selected
					checkmark={false}
				/>
				<Separator />
				<ListItem
					text='Green'
					handleThemePress={this.handleThemePress}
					selected
					checkmark={false}
				/>
				<Separator />
				<ListItem
					text='Purple'
					handleThemePress={this.handleThemePress}
					selected
					checkmark={false}
				/>
				<Separator />
				<ListItem
					text='Orange'
					handleThemePress={this.handleThemePress}
					selected
					checkmark={false}
				/>
				<Separator />
			</ScrollView>
		)
	}
}
