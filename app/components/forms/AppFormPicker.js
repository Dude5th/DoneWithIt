import { useFormikContext } from 'formik';
import React from 'react';

import AppPicker from '../AppPicker/AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({
	items,
	name,
	numberOfColumns,
	PickerItemConponent,
	placeholder,
	width
}) {
	const { errors, setFieldValue, touched, values } = useFormikContext();
	return (
		<React.Fragment>
			<AppPicker
				items={items}
				numberOfColumns={numberOfColumns}
				onSelectItem={(item) => setFieldValue(name, item)}
				PickerItemConponent={PickerItemConponent}
				placeholder={placeholder}
				selectedItem={values[name]}
				width={width}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</React.Fragment>
	);
}

export default AppFormPicker;
