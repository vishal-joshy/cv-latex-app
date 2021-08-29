import React, { useState } from 'react';
import EducationForm from './EducationForm/EducationForm';
import ExperienceForm from './ExperienceForm/ExperienceForm';
import GeneralForm from './GeneralForm/GeneralForm';

function FormComponent() {
	const [data, setData] = useState({ generalData: '', educationData: '', experienceData: '' });
	const getGeneralData = (inputData) => {
		setData({
			generalData: inputData,
		});
		console.log(data);
	};
	const getEducationData = (inputData) => {
		setData({
			educationData: inputData,
		});
	};
	const getExperienceData = (inputData) => {
		setData({
			experienceData: inputData,
		});
		console.log(data);
	};

	return (
		<div>
			<form action="onSubmitForm"></form>
			<GeneralForm getGeneralData={getGeneralData} />
			<EducationForm getEducationData={getEducationData} />
			<ExperienceForm getExperienceData={getExperienceData} />
			<button type="submit">Submit</button>
		</div>
	);
}

export default FormComponent;
