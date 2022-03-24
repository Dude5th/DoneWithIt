import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/listItem/ListItem';
import colours from '../config/colours';

function ListingDetailsScreen({ route }) {
	const listing = route.params;
	return (
		<View>
			<Image
				style={styles.image}
				source={{
					uri: listing.image
				}}
			/>
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{listing.title}</AppText>
				<AppText style={styles.price}>${listing.price}</AppText>
			</View>
			<View style={styles.userContainer}>
				<ListItem
					title='Peter Huber'
					subTitle='5 listings'
					image='https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20
	},
	image: {
		width: '100%',
		height: 300
	},
	price: {
		color: colours.secondary,
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 10
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold'
	},
	userContainer: {
		marginVertical: 30,
		marginLeft: 15
	}
});

export default ListingDetailsScreen;
