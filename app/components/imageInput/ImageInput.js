import React, { useEffect, useState } from 'react';
import {
	Alert,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	View
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import colours from '../../config/colours';

function ImageInput({ imageUri, onChangeImage }) {
	useEffect(() => {
		requestPermission();
	}, []);

	const requestPermission = async () => {
		// const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION);
		// if (!result,granted) {
		// 	alert('You need to enable permission to access the library');
		// }

		const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
		if (!granted) {
			alert('You need to enable permission to access the library');
		}
	};

	const handlePress = () => {
		if (!imageUri) {
			selectImage();
		} else {
			Alert.alert('Delete', 'Are you sure you want to delete this image?', [
				{ text: 'Yes', onPress: () => onChangeImage(null) },
				{ text: 'No' }
			]);
		}
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5
			});
			if (!result.cancelled) {
				if (onChangeImage) onChangeImage(result.uri);
			}
		} catch (error) {
			console.error('Error reading an image', error);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{imageUri ? (
					<Image
						style={styles.image}
						source={{ uri: imageUri }}
						resizeMode='cover'
					/>
				) : (
					<MaterialCommunityIcons
						name='camera'
						color={colours.medium}
						size={50}
					/>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colours.light,
		width: 100,
		height: 100,
		borderRadius: 15,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: '100%'
	}
});
export default ImageInput;
