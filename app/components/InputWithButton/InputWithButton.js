import React from 'react';
import { View, Text, TouchableHighlight, Button, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const onPress = () => {
	console.log('hi');
}

const InputWithButton = ({onPress, buttonText, editable = true}) => (
	<View style={styles.container}>
		<TouchableHighlight style={styles.buttonContainer} onPress={onPress} editable={editable}>
			<Text style={styles.buttonText}>{buttonText}</Text>
		</TouchableHighlight>
		<View style={styles.border} />
		<TextInput style={styles.input} />
	</View>
);

InputWithButton.propTypes = {
	onPress: PropTypes.func,
	buttonText: PropTypes.string,
	editable: PropTypes.bool
}

export default InputWithButton;
