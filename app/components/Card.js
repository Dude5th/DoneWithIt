import React from 'react';
import {
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	View
} from 'react-native';
import colours from '../config/colours';
import AppText from './AppText';

function Card({ title, subTitle, imageUrl, onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.card}>
				<Image style={styles.image} source={{ uri: imageUrl }} />
				<View style={styles.detailsContainer}>
					<AppText style={styles.title} numberOfLines={1}>
						{title}
					</AppText>
					<AppText style={styles.subTitle} numberOfLines={2}>
						{subTitle}
					</AppText>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: colours.white,
		borderRadius: 15,
		marginBottom: 20,
		overflow: 'hidden'
	},
	detailsContainer: {
		padding: 20
	},
	image: {
		width: '100%',
		height: 200
	},
	subTitle: {
		color: colours.secondary,
		fontWeight: 'bold'
	},
	title: {
		marginBottom: 7
	}
});

export default Card;
