import React from 'react';
import EducationDisplay from './EducationDisplay/EducationDisplay';
import ExperienceDisplay from './ExperienceDisplay/ExperienceDisplay';
import GeneralDisplay from './GeneralDisplay/GeneralDisplay';

function DisplayComponent() {
	return (
		<div>
			<GeneralDisplay />
			<EducationDisplay />
			<ExperienceDisplay />
		</div>
	);
}

export default DisplayComponent;
