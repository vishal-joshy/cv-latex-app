import React, { useState, useEffect } from 'react';

function ExperienceForm({ getExperienceData }) {
	const [experienceData, setExperienceData] = useState([
		{ companyName: '', designation: '', duration: '' },
	]);

	useEffect(() => {
		getExperienceData(experienceData);
		return () => {};
	}, [experienceData]);

	const handleInput = (e, index) => {
		let values = [...experienceData];
		values[index][e.target.name] = e.target.value;
		setExperienceData(values);
	};

	const addForm = () => {
		setExperienceData((prev) => [...prev, { companyName: '', designation: '', duration: '' }]);
	};

	return (
		<div>
			<h1>ExperienceForm</h1>
			<button onClick={addForm}>Add</button>
			{experienceData.map((data, index) => {
				return (
					<div key={index}>
						<input
							name="companyName"
							type="text"
							placeholder="Company Name"
							onChange={(e) => {
								handleInput(e, index);
							}}
						></input>
						<input
							name="designation"
							type="text"
							placeholder="Position"
							onChange={(e) => {
								handleInput(e, index);
							}}
						></input>
						<input
							name="duration"
							type="text"
							placeholder="Duration"
							onChange={(e) => {
								handleInput(e, index);
							}}
						></input>
					</div>
				);
			})}
		</div>
	);
}

export default ExperienceForm;
