import React from 'react';
import { View, Text, TouchableHighlight, Button, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {

	const underlayColor = color(styles.$buttonBase).darken(styles.$buttonMod);

	const {onPress, buttonText, editable = true} = props;

	const containerStyles = [styles.container];
	if (!editable) {
		containerStyles.push(styles.containerDisabled);
	}

	return (
		<View style={containerStyles}>
			<TouchableHighlight style={styles.buttonContainer} onPress={onPress} editable={editable} underlayColor={underlayColor}>
				<Text style={styles.buttonText}>{buttonText}</Text>
			</TouchableHighlight>
			<View style={styles.border} />
			<TextInput style={styles.input} {...props} />
		</View>
	)
};

InputWithButton.propTypes = {
	onPress: PropTypes.func,
	buttonText: PropTypes.string,
	editable: PropTypes.bool,
}

export default InputWithButton;
