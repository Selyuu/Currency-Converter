import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

export default class Options extends Component {

	handleThemesPress = () => {
		console.log('themes pressed');
	}

	handleSitePress = () => {
		console.log('sites pressed');
	}

	render() {
		return (
			<ScrollView style={{marginTop: 40}}>
				<StatusBar translucent={false} barStyle='default' />
				<ListItem
					text='Themes'
					onPress={this.handleThemesPress}
					customIcon={
						<Ionicons name='ios-arrow-forward' color={ICON_COLOR} size={ICON_SIZE} />
					}
				/>
				<Separator />
				<ListItem
					text='Selyuu.io'
					onPress={this.handleSitePress}
					customIcon={
						<Ionicons name='ios-link' color={ICON_COLOR} size={ICON_SIZE} />
					}
				/>
				<Separator />
			</ScrollView>
		)
	}
}
