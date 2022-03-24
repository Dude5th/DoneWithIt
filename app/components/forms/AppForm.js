import { Formik } from 'formik';
import React from 'react';

function AppForm({ children, initialValues, onSubmit, validationSchema }) {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}>
			{() => <React.Fragment>{children}</React.Fragment>}
		</Formik>
	);
}

export default AppForm;
