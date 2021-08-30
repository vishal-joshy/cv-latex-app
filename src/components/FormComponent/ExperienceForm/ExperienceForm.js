import React, { useState, useEffect, useCallback } from 'react';

function ExperienceForm({ getExperienceData }) {
	const [companyName, setCompanyName] = useState('');
	const [designation, setDesignation] = useState('');
	const [duration, setDuration] = useState('');

	useEffect(() => {
		getExperienceData({ companyName: companyName, designation: designation, duration: duration });
		return () => {};
	}, [companyName, designation, duration]);

	const handleCompanyName = useCallback((e) => {
		setCompanyName(e.target.value);
	}, []);
	const handleDesignation = useCallback((e) => {
		setDesignation(e.target.value);
	}, []);
	const handleDuration = useCallback((e) => {
		setDuration(e.target.value);
	}, []);

	return (
		<div>
			<h1>ExperienceForm</h1>
			<input type="text" placeholder="Company Name" onChange={handleCompanyName}></input>
			<input type="text" placeholder="Position" onChange={handleDesignation}></input>
			<input type="text" placeholder="Duration" onChange={handleDuration}></input>
		</div>
	);
}

export default ExperienceForm;
