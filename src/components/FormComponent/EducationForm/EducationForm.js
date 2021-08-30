import React, { useState, useEffect } from 'react';

function EducationForm({ getEducationData }) {
	const [educationData, setEducationData] = useState([
		{ schoolName: '', subject: '', duration: '' },
	]);

	const addForm = () => {
		setEducationData((prev) => [...prev, { schoolName: '', subject: '', duration: '' }]);
		console.log(EducationForm);
	};
	const handleInput = (e, index) => {
		let values = [...educationData];
		values[index][e.target.name] = e.target.value;
		setEducationData(values);
		console.log(values);
	};

	const removeData = (index) => {
		let values = [...educationData];
		values.splice(index, 1);
		setEducationData(values);
	};

	return (
		<div>
			<h1>EducationForm</h1>
			<button onClick={addForm}>Add</button>
			{educationData.map((data, index) => {
				return (
					<div key={index}>
						<input
							name="schoolName"
							type="text"
							placeholder="SchoolName"
							onChange={(e) => {
								handleInput(e, index);
							}}
						></input>
						<input
							name="subject"
							type="text"
							placeholder="Subject"
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
						<button
							onClick={() => {
								removeData(index);
							}}
						>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default EducationForm;
