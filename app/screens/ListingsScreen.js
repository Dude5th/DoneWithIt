import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
//expo install lottie-react-native

import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colours from '../config/colours';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppActivityIndicator from '../components/AppActivityIndicator';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
	const { data: listings, error, loading, request: loadListings } = useApi(
		listingsApi.getListingsAsync
	);

	useEffect(() => {
		loadListings();
	}, []);

	return (
		<Screen style={styles.screen}>
			{error && (
				<React.Fragment>
					<AppText>Couldn't retreive settings</AppText>
					<AppButton title='Retry' onPress={loadListings} />
				</React.Fragment>
			)}
			<AppActivityIndicator visible={loading} />
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={'$' + item.price}
						imageUrl={item.image}
						onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: colours.light
	}
});

export default ListingsScreen;
