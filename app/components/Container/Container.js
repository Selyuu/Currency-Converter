import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';

const Container = ({ children, backgroundColor }) => {
	const containerStyles = [styles.container];
	backgroundColor ? containerStyles.push({ backgroundColor }) : false;
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={containerStyles}>
				{children}
			</View>
		</TouchableWithoutFeedback>
	)
}

Container.propTypes = {
	children: PropTypes.any,
	backgroundColor: PropTypes.string,
}

export default Container;
