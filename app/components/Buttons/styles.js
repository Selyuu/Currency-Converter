import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		alignItems: 'center',
	},
	view: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		width: 19,
		marginRight: 11,
	},
	text: {
		color: '$white',
		fontSize: 14,
		fontWeight: '500',
		paddingVertical: 25,
	},
});
