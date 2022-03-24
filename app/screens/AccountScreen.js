import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../components/listItem/ListItem';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import ListItemSeperator from '../components/listItem/ListItemSeperator';
import defaultStyles from '../config/styles';
import routes from '../navigation/routes';

const menuItems = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: defaultStyles.colours.primary
		},
		targetScreen: routes.LISTINGS
	},
	{
		title: 'My Messages',
		icon: { name: 'email', backgroundColor: defaultStyles.colours.secondary },
		targetScreen: routes.MESSAGES
	}
];

function AccountScreen({ navigation }) {
	return (
		<Screen style={styles.screen}>
			<ListItem
				title='Peter Huber'
				subTitle='peterhuber5th@gmail.com'
				image='https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
			/>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(item) => item.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							// subTitle='main'
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
							onPress={() => navigation.navigate(item.targetScreen)}
						/>
					)}
					ItemSeparatorComponent={ListItemSeperator}
				/>
			</View>
			<ListItem
				title='Log Out'
				// subTitle='main'
				IconComponent={
					<Icon name='logout' backgroundColor={defaultStyles.colours.yellow} />
				}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: defaultStyles.colours.light
	},
	container: {
		marginVertical: 20
	}
});

export default AccountScreen;
