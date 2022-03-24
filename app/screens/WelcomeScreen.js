import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

function WelcomeScreen({ navigation }) {
	return (
		<ImageBackground
			blurRadius={1}
			style={styles.background}
			source={{ uri: 'https://picsum.photos/200/300' }}>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={{
						uri:
							'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
					}}
				/>
				<Text style={styles.tagline}>Sell what u don't need</Text>
			</View>
			<View style={styles.buttons}>
				<AppButton
					title='Login'
					onPress={() => navigation.navigate(routes.LOGIN)}
				/>
				<AppButton
					title='Register'
					colour='secondary'
					onPress={() => navigation.navigate(routes.REGISTER)}
				/>
			</View>
		</ImageBackground>
	);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	buttons: {
		padding: 20,
		width: '100%'
	},
	logo: {
		width: 100,
		height: 100
	},
	logoContainer: {
		position: 'absolute',
		top: '25%',
		alignItems: 'center'
	},
	tagline: {
		fontSize: 25,
		fontWeight: '600',
		paddingVertical: 20
	}
});
