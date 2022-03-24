import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...otherProps }) {
	const {
		setFieldTouched,
		setFieldValue,
		errors,
		touched,
		values
	} = useFormikContext();

	return (
		<React.Fragment>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={(text) => setFieldValue(name, text)}
				value={values[name]}
				width={width}
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</React.Fragment>
	);
}

const styles = StyleSheet.create({});

export default AppFormField;
