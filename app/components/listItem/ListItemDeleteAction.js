import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import defaultStyles from '../../config/styles';

function ListItemDeleteAction({ onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name='trash-can'
					color={defaultStyles.colours.white}
					size={35}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colours.danger,
		width: 70,
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%'
	}
});

export default ListItemDeleteAction;
