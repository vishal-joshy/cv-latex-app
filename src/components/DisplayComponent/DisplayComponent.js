import React from 'react';
import EducationDisplay from './EducationDisplay/EducationDisplay';
import ExperienceDisplay from './ExperienceDisplay/ExperienceDisplay';
import GeneralDisplay from './GeneralDisplay/GeneralDisplay';

function DisplayComponent({ data }) {
	console.log(data);
	return (
		<div className='border-2 m-auto w-9/12'>
			<GeneralDisplay generalData= {data.generalData}/>
			<EducationDisplay educationData= {data.educationData} />
			<ExperienceDisplay experienceData= {data.experienceData}/>
		</div>
	);
}

export default DisplayComponent;
