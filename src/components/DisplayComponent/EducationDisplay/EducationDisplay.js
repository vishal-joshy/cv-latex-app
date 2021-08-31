import React from 'react';

function EducationDisplay({ educationData }) {
	return (
		<div>
			<h1>EducationDisplay</h1>
			{educationData.map((data, index) => {
				return (
					<div key={index}>
						<div>SchoolName:{data.schoolName}</div>
						<div>Subject:{data.subject}</div>
						<div>Duration:{data.duration}</div>
					</div>
				);
			})}
		</div>
	);
}

export default EducationDisplay;
