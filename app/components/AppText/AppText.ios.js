import React from 'react';
import { Text, StyleSheet } from 'react-native';

// <Heading>My Headin</Heading>
function AppText({ children, style, ...otherProps }) {
	return (
		<Text style={[styles.text, style]} {...otherProps}>
			{children}
		</Text>
	);
}

export default AppText;

const styles = StyleSheet.create({
	text: {
		color: 'black',
		fontSize: 20,
		fontFamily: 'Avenir'
	}
});
