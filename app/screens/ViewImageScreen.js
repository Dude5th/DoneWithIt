import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import colours from '../config/colours';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//rsf
function ViewImageScreen(props) {
	return (
		<View style={styles.container}>
			<View style={styles.closeIcon}>
				<MaterialCommunityIcons name='close' color='white' size={35} />
			</View>
			<View style={styles.deleteIcon}>
				<MaterialCommunityIcons
					name='trash-can-outline'
					color='white'
					size={35}
				/>
			</View>
			<Image
				resizeMode='contain'
				style={styles.image}
				source={{
					uri:
						'https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII'
				}}
			/>
		</View>
	);
}

export default ViewImageScreen;

// rnss
const styles = StyleSheet.create({
	closeIcon: {
		position: 'absolute',
		top: 40,
		left: 30
	},
	container: {
		backgroundColor: colours.black,
		flex: 1
	},
	deleteIcon: {
		position: 'absolute',
		top: 40,
		right: 30
	},
	image: {
		width: '100%',
		height: '100%'
	}
});
