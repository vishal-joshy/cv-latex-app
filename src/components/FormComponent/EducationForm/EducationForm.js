import React, { useState, useEffect } from 'react';

function EducationForm({ getEducationData }) {
	const [educationData, setEducationData] = useState([
		{ schoolName: '', subject: '', duration: '' },
	]);

	useEffect(() => {
		getEducationData(educationData);
		return () => {};
	}, [educationData]);

	const addForm = () => {
		setEducationData((prev) => [...prev, { schoolName: '', subject: '', duration: '' }]);
	};

	const handleInput = (e, index) => {
		let values = [...educationData];
		values[index][e.target.name] = e.target.value;
		setEducationData(values);
	};

	const removeData = (index) => {
		let values = [...educationData];
		values.splice(index, 1);
		setEducationData(values);
	};

	return (
		<div className='w-9/12 m-auto'>
			<div className='flex justify-between'>
			<h1 className='font-mono text-xl'>EducationForm</h1>
			<button className='p-2 bg-gray-600 text-white w-12 rounded-sm ' onClick={addForm}>Add</button>
			</div>
			{educationData.map((data, index) => {
				return (
					<div className='flex flex-col' key={index}>
						<input
							className='form-input'
							name='schoolName'
							type='text'
							placeholder='SchoolName'
							onChange={(e) => {
								handleInput(e, index);
							}}></input>
						<input
							className='form-input'
							name='subject'
							type='text'
							placeholder='Subject'
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

export default EducationForm;
