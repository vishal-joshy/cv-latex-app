import React, { useState, useEffect, useCallback } from 'react';

function EducationForm({ getEducationData }) {
	const [schoolName, setSchoolName] = useState('');
	const [subject, setSubject] = useState('');
	const [duration, setDuration] = useState('');

	useEffect(() => {
		getEducationData({ schoolName: schoolName, subject: subject, duration: duration });
		return () => {};
	}, [schoolName, subject, duration]);

	const handleSchoolName = useCallback((e) => {
		setSchoolName(e.target.value);
	}, []);
	const handleSubject = useCallback((e) => {
		setSubject(e.target.value);
	}, []);
	const handleDuration = useCallback((e) => {
		setDuration(e.target.value);
	}, []);

	return (
		<div>
			<h1>EducationForm</h1>
			<input type="text" placeholder="SchoolName" onChange={handleSchoolName}></input>
			<input type="text" placeholder="Subject" onChange={handleSubject}></input>
			<input type="text" placeholder="Duration" onChange={handleDuration}></input>
		</div>
	);
}

export default EducationForm;
