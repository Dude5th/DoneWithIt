import React from 'react';
import {
	AppForm,
	AppFormField,
	AppFormPicker,
	SubmitButton
} from '../components/forms';
import * as yup from 'yup';

import Screen from '../components/Screen';
import { StyleSheet } from 'react-native';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';

const validationSchema = yup.object().shape({
	title: yup.string().required().min(4).label('Title'),
	price: yup.number().required().min(1).max(10000).label('Price'),
	description: yup.string().label('Description'),
	category: yup.object().required().nullable().label('Category'),
	images: yup.array().min(1, 'Please select at least one image')
});

const categories = [
	{ label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
	{ label: 'Clothng', value: 2, backgroundColor: 'green', icon: 'email' },
	{ label: 'Cameras', value: 3, backgroundColor: 'blue', icon: 'lock' }
];

function ListingEditScreen(props) {
	//const location = useLocation();

	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{
					title: '',
					price: '',
					description: '',
					category: null,
					images: []
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}>
				<FormImagePicker name='images' />
				<AppFormField maxLength={255} name='title' placeholder='Title' />
				<AppFormField
					keyboardType='numeric'
					maxLength={8}
					name='price'
					placeholder='Price'
					width={150}
				/>
				<AppFormPicker
					name='category'
					placeholder='Category'
					items={categories}
					width='50%'
					PickerItemConponent={CategoryPickerItem}
					numberOfColumns={3}
				/>
				<AppFormField
					maxLength={255}
					multiline
					name='description'
					numberOfLines={3}
					placeholder='Description'
				/>
				<SubmitButton title='Post' />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10
	}
});
export default ListingEditScreen;
