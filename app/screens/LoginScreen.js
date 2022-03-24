import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password')
});

function LoginScreen(props) {
	return (
		<Screen style={styles.container}>
			<Image
				style={styles.logo}
				source={{
					uri:
						'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
				}}
			/>
			<AppForm
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}>
				<AppFormField
					autoCapitalize='none'
					autoCorrect={false}
					icon='email'
					keyboardType='email-address'
					name='email'
					placeholder='Email'
					textContentType='emailAddress' // only iOS
				/>
				<AppFormField
					autoCapitalize='none'
					autoCorrect={false}
					icon='lock'
					name='password'
					placeholder='Password'
					secureTextEntry
					textContentType='password' // only iOS
				/>
				{/* {touched.password && <ErrorMessage error={errors.password} />} */}
				<SubmitButton title='Login' />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20
	}
});

export default LoginScreen;
