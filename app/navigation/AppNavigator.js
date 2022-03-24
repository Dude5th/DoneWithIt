import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import colours from '../config/colours';
import NewListingButton from './NewListingButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen
			name={routes.FEED}
			component={FeedNavigator}
			options={{
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons size={size} color={color} name='home' />
				)
			}}
		/>
		<Tab.Screen
			name={routes.LISTING_EDIT}
			component={ListingEditScreen}
			options={({ navigation }) => ({
				tabBarButton: () => (
					<NewListingButton
						onPress={() => navigation.navigate(routes.LISTING_EDIT)}
					/>
				),
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons size={size} color={color} name='circle' />
				)
			})}
		/>
		<Tab.Screen
			name={routes.ACCOUNT}
			component={AccountScreen}
			options={{
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons size={size} color={color} name='account' />
				)
			}}
		/>
	</Tab.Navigator>
);

export default AppNavigator;
