import React, { useState } from 'react';
import DisplayComponent from './DisplayComponent/DisplayComponent';
import FormComponent from './FormComponent/FormComponent';

function Main() {
	const [formData, setFormData] = useState('');
	const getFormData = (data) => {
		setFormData(data);
	};
	let display;
	if (formData) {
		display = <DisplayComponent data={formData} />;
	} else {
		display = '';
	}
	return (
		<div>
			<FormComponent getFormData={getFormData} />
			{display}
		</div>
	);
}

export default Main;
