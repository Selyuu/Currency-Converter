import React from 'react';
import { View, Text, TouchableHighlight, Button, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {

	const underlayColor = color(styles.$buttonBase).darken(styles.$buttonMod);

	const {onPress, buttonText, editable = true, textColor} = props;

	const containerStyles = [styles.container];
	if (!editable) containerStyles.push(styles.containerDisabled);

	const buttonStyles = [styles.buttonText];
	console.log('hi', textColor);
	if (textColor) buttonStyles.push({ color: textColor });

	return (
		<View style={containerStyles}>
			<TouchableHighlight style={styles.buttonContainer} onPress={onPress} editable={editable} underlayColor={underlayColor}>
				<Text style={buttonStyles}>{buttonText}</Text>
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
	textColor: PropTypes.string,
}

export default InputWithButton;
