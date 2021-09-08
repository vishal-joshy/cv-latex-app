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
	const removeData = (index) => {
		let values = [...experienceData];
		values.splice(index, 1);
		setExperienceData(values);
	};

	return (
		<div className='w-9/12 m-auto'>
			<div className='flex justify-between'>
				<h1 className='font-mono text-xl'>ExperienceForm</h1>
				<button className='p-2 bg-gray-600 text-white w-12 rounded-sm ' onClick={addForm}>
					Add
				</button>
			</div>
			{experienceData.map((data, index) => {
				return (
					<div className='flex flex-col' key={index}>
						<input
							className='form-input'
							name='companyName'
							type='text'
							placeholder='Company Name'
							onChange={(e) => {
								handleInput(e, index);
							}}></input>
						<input
							className='form-input'
							name='designation'
							type='text'
							placeholder='Position'
							onChange={(e) => {
								handleInput(e, index);
							}}></input>
						<input
							className='form-input'
							name='duration'
							type='text'
							placeholder='Duration'
							onChange={(e) => {
								handleInput(e, index);
							}}></input>
						<button
							className='p-2 bg-gray-600 text-white rounded-sm'
							onClick={() => {
								removeData(index);
							}}>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default ExperienceForm;
