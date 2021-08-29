import React from 'react';
import EducationForm from './EducationForm/EducationForm';
import ExperienceForm from './ExperienceForm/ExperienceForm';
import GeneralForm from './GeneralForm/GeneralForm';

function FormComponent() {
	return (
		<div>
			<form action="onSubmitForm"></form>
			<GeneralForm />
			<EducationForm />
			<ExperienceForm />
			<button type="submit">Submit</button>
		</div>
	);
}

export default FormComponent;
