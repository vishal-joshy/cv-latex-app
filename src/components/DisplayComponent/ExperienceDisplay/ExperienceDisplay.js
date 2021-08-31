import React from 'react';

function ExperienceDisplay({ experienceData }) {
	return (
		<div>
			<h1>ExperienceDisplay</h1>
			{experienceData.map((data, index) => {
				return (
					<div key={index}>
						<div>CompanyName:{data.companyName}</div>
						<div>Designation:{data.designation}</div>
						<div>Duration:{data.duration}</div>
					</div>
				);
			})}
		</div>
	);
}

export default ExperienceDisplay;
