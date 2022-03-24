import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
	name: Yup.string().required().min(4).label('Name'),
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password')
});

function RegisterScreen(props) {
	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{ name: '', email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}>
				<AppFormField
					autoCapitalize='words'
					autoCorrect={true}
					icon='account'
					name='name'
					placeholder='John Doe'
					textContentType='name' // only iOS
				/>
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
				<SubmitButton title='Register' />
			</AppForm>
		</Screen>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 10
	}
});
export default RegisterScreen;
