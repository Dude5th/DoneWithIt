import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colours from './app/config/colours';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import { color } from 'react-native-reanimated';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AccountNavigator from './app/navigation/AccountNavigator';

export default function App() {
	isLandscape();
	const handlePress = (value) => console.log('clicked', value);
	const [imageUris, setImageUris] = useState([]);

	const Link = () => {
		const navigation = useNavigation();
		return (
			<Button
				title='go'
				onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
			/>
		);
	};

	const Tweets = ({ navigation }) => (
		<Screen>
			<Text>Tweets</Text>
			<Link />
			{/* <Button
				title='Click'
				onPress={() => navigation.navigate('TweetDetails', 1)}
			/> */}
		</Screen>
	);

	const TweetDetails = ({ route }) => (
		<Screen>
			<Text>Tweet Details {route.params.id}</Text>
		</Screen>
	);

	const Stack = createStackNavigator();
	const StackNavigator = () => (
		<Stack.Navigator>
			<Stack.Screen
				name='Tweet'
				component={Tweets}
				options={{
					title: 'Tweet Dude',
					headerStyle: { backgroundColor: colours.primary }
					//headerShown: false
				}}
			/>
			<Stack.Screen
				name='TweetDetails'
				component={TweetDetails}
				options={({ route }) => ({ title: route.params.id })}
			/>
		</Stack.Navigator>
	);

	const Tab = createBottomTabNavigator();
	const TabNavigator = () => (
		<Tab.Navigator
		// tabBarOptions={{
		// 	activeBackgroundColor: colours.primary,
		// 	activeTintColor: colours.white,
		// 	inactiveBackgroundColor: colours.light,
		// 	inactiveTintColor: colours.black
		// }}
		>
			<Tab.Screen
				name='Feed'
				component={StackNavigator}
				options={
					{
						// tabBarIcon: ({ size, color }) => (
						// 	<MaterialCommunityIcons name='home' color={color} size={size} />
						// )
					}
				}
			/>
			<Tab.Screen name='Account' component={AccountScreen} />
		</Tab.Navigator>
	);

	return (
		<NavigationContainer theme={navigationTheme}>
			{/* <StackNavigator /> */}
			{/* <TabNavigator /> */}

			{/* if logged in ? <AuthNavigator /> : <AppNavigator />  */}
			<AuthNavigator />
		</NavigationContainer>
	);
	//height: isLandscape() ? '100%' : '30%'
}

function isLandscape() {
	//
	// console.log(useDeviceOrientation());
	// console.log(useDimensions());
	// Dimensions.get('screen');
	const dim = useDimensions().window;
	const isLandscape = dim.width >= dim.height;
	console.log('isLandscape', isLandscape);
	return isLandscape;
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// backgroundColor: '#fff',
		// // alignItems: 'center',
		// // justifyContent: 'center'
		// paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0

		alignItems: 'center',
		flexDirection: 'row',
		padding: 15,
		backgroundColor: colours.white
	},
	textContainer: {
		marginLeft: 10,
		justifyContent: 'center',
		flex: 1
	},
	title: {
		fontWeight: '500'
	}
});
function renderViews() {
	return (
		<View
			style={{
				backgroundColor: '#fff',
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center' // secondary - items in line
				//flexWrap: 'wrap',
				//alignContent: 'center' // only works if it has wrapping
			}}>
			<View
				style={{
					backgroundColor: 'dodgerblue',
					//flexBasis: 100, // same width
					width: 100,
					//flexGrow: 1, // flex doesn't work
					//flexShrink: 1, //or use flex: -1,
					//flex: -1,
					height: 100
					//alignSelf: 'flex-start'
				}}></View>
			<View
				style={{
					backgroundColor: 'gold',
					width: 100,
					height: 100
					// top: 20,
					// left: 20,
					// position: 'absolute'
				}}
			/>
			<View
				style={{
					backgroundColor: 'tomato',
					width: 100,
					height: 100
				}}
			/>
		</View>
	);
}
