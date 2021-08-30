import React from 'react';

function EducationDisplay({ educationData }) {
	return (
		<div>
			<h1>EducationDisplay</h1>
			<div>SchoolName:{educationData.schoolName}</div>
			<div>Subject:{educationData.subject}</div>
			<div>Duration:{educationData.duration}</div>
		</div>
	);
}

export default EducationDisplay;
