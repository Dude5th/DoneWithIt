import React from 'react';
import { StyleSheet, View } from 'react-native';
import colours from '../config/colours';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({
	size = 40,
	backgroundColor = colours.black,
	foregroundColor = colours.white,
	name
}) {
	return (
		<View
			style={{
				backgroundColor: backgroundColor,
				borderRadius: size / 2,
				width: size,
				height: size,
				justifyContent: 'center',
				alignItems: 'center'
			}}>
			<MaterialCommunityIcons
				name={name}
				size={size / 2}
				color={foregroundColor}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});

export default Icon;
