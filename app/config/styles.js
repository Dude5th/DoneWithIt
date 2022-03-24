import { Platform } from 'react-native';
import colours from './colours';

export default {
	colours,
	text: {
		color: colours.dark,
		...Platform.select({
			ios: {
				fontSize: 20,
				fontFamily: 'Avenir'
			},
			android: {
				fontSize: 18,
				fontFamily: 'Roboto'
			}
		})
	}
};
