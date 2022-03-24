import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colours from '../config/colours';

function NewListingButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					size={30}
					color={colours.white}
					name='plus-circle'
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colours.primary,
		borderColor: colours.white,
		borderRadius: 30,
		borderWidth: 5,
		width: 60,
		height: 60,
		bottom: 20,
		justifyContent: 'center'
	}
});
export default NewListingButton;
