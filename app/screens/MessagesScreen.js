import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/listItem/ListItem';
import ListItemDeleteAction from '../components/listItem/ListItemDeleteAction';
import ListItemSeperator from '../components/listItem/ListItemSeperator';
import Screen from '../components/Screen';

const initialMessages = [
	{
		id: 1,
		title: 'T1',
		description: 'D1',
		image:
			'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
	},
	{
		id: 2,
		title: 'T2',
		description: 'D2',
		image:
			'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
	}
];

function MessagesScreen(props) {
	// const array = useState(0);
	// const count = array[0];
	// const setCount = array[1]; // setstate;

	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setrefreshing] = useState(false);

	const handleDelete = (message) => {
		// Delete the message from messages
		console.log(message);
		setMessages(messages.filter((s) => s.id !== message.id));

		// call server
	};

	return (
		<Screen style={styles.screen}>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log('touched', item)}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={(props) => <ListItemSeperator />}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages(initialMessages);
				}}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {}
});

export default MessagesScreen;
