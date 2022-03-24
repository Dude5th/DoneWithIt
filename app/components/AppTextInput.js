import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';
import colours from '../config/colours';
import defaultStyles from '../config/styles';

function AppTextInput({ icon, width = '100%', ...otherProps }) {
	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={defaultStyles.colours.medium}
					style={styles.icon}
				/>
			)}
			<TextInput
				placeholderTextColor={defaultStyles.colours.medium}
				style={defaultStyles.text}
				{...otherProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colours.light,
		borderRadius: 15,
		flexDirection: 'row',
		padding: 5,
		marginVertical: 10
	},
	icon: {
		margin: 10
	}
});

export default AppTextInput;
