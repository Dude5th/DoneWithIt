import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../../config/styles';
import AppText from '../AppText';

function ListItem({
	title,
	subTitle,
	image,
	IconComponent,
	onPress,
	renderRightActions
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight
				onPress={onPress}
				underlayColor={defaultStyles.colours.light}>
				<View style={styles.container}>
					{IconComponent}
					{image && (
						<Image
							style={styles.image}
							source={{
								uri: image
							}}
						/>
					)}

					<View style={styles.textContainer}>
						<AppText style={styles.title} numberOfLines={1}>
							{title}
						</AppText>
						{subTitle && (
							<AppText style={styles.subTitle} numberOfLines={2}>
								{subTitle}
							</AppText>
						)}
					</View>
					<MaterialCommunityIcons
						color={defaultStyles.colours.medium}
						name='chevron-right'
						size={25}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'row',
		padding: 15,
		backgroundColor: defaultStyles.colours.white
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35
	},
	textContainer: {
		marginLeft: 10,
		justifyContent: 'center',
		flex: 1
	},
	subTitle: {
		fontSize: 14,
		color: defaultStyles.colours.medium
	},
	title: {
		fontWeight: '500'
	}
});

export default ListItem;
