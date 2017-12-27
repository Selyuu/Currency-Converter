import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Icon = ({ checkmark, visible }) => {
	const iconStyles = [styles.icon];
	visible ? iconStyles.push(styles.iconVisible) : false;

	return (
		<View style={iconStyles}>
			{checkmark ? <Image style={styles.imageIcon} source={require('./img/check.png')} resizeMode='contain' /> : false}
		</View>
				);
}

Icon.propTypes = {
	checkmark: PropTypes.bool,
	visible: PropTypes.bool,
}

export default Icon;
