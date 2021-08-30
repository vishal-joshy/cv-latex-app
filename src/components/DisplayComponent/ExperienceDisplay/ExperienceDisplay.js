import React from 'react';

function ExperienceDisplay({ experienceData }) {
	return (
		<div>
			<h1>ExperienceDisplay</h1>
			<div>CompanyName:{experienceData.companyName}</div>
			<div>Designation:{experienceData.designation}</div>
			<div>Duration:{experienceData.duration}</div>
		</div>
	);
}

export default ExperienceDisplay;
