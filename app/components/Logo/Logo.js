import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';

import styles from './styles';

const Logo = () => (
	<View style={styles.container}>
		<ImageBackground resizeMode="contain" style={styles.containerImage} source={require('./img/background.png')}>
			<Image resizeMode="contain" style={styles.image} source={require('./img/bank.png')}/>
		</ImageBackground>
		<Text style={styles.text}>EZVert</Text>
	</View>
);

export default Logo;
