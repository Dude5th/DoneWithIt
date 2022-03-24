import React from 'react';
import { Text } from 'react-native';
import defaultStyles from '../../config/styles';

// <Heading>My Headin</Heading>
function AppText({ children, style, ...otherProps }) {
	return (
		<Text numberOfLines={1} style={style} {...otherProps}>
			{children}
		</Text>
	);
}

export default AppText;
