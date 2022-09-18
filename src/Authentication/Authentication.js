import React, { useState } from 'react';
import AppModal from '../AppModal/AppModal';

const Authentication = () => {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleOnChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const resetInputs = () => {
		setFormData({
			email: '',
			password: '',
		});
	};

	const loginUser = () => {
		setIsUserLoggedIn((prevIsUserLoggedIn) => !prevIsUserLoggedIn);
	};

	const validateForm = () => {
		const { email, password } = formData;
		return email && password;
	};
	const modalContent = !isUserLoggedIn ? (
		<form>
			<div className='mb-3'>
				<label htmlFor='exampleInputEmail1' className='form-label'>
					Email address
				</label>
				<input
					type='email'
					className='form-control'
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
					name='email'
					value={formData.email}
					onChange={handleOnChange}
				/>
				<div id='emailHelp' className='form-text'>
					We'll never share your email with anyone else.
				</div>
			</div>
			<div className='mb-3'>
				<label htmlFor='exampleInputPassword1' className='form-label'>
					Password
				</label>
				<input
					type='password'
					className='form-control'
					id='exampleInputPassword1'
					name='password'
					value={formData.password}
					onChange={handleOnChange}
				/>
			</div>
		</form>
	) : (
		<p>Are you sure you want to log out?</p>
	);
	return (
		<AppModal
			title={isUserLoggedIn ? 'Logout' : 'Login'}
			content={modalContent}
			cancelButtonText='Cancel'
			confirmButtonText={isUserLoggedIn ? 'Logout' : 'Login'}
			confirmButtonStatus={
				validateForm() || isUserLoggedIn ? null : 'disabled'
			}
			loginUser={loginUser}
			resetInputs={resetInputs}
		/>
	);
};

export default Authentication;
