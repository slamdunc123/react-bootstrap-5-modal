import React, { useState } from 'react';
import AppModal from '../AppModal/AppModal';

const TermsAndConditions = () => {
	const [isChecked, setIsChecked] = useState(false);

	const resetInputs = () => {
		setIsChecked(false);
	};
	const modalContent = (
		<>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Blanditiis perferendis maxime, rem sunt harum similique? Sunt
				maiores, deserunt qui tempore porro molestias autem iure soluta,
				quia aspernatur, asperiores debitis explicabo!
			</p>

			<div className='form-check'>
				<input
					className='form-check-input'
					type='checkbox'
					value=''
					id='flexCheckDefault'
					onChange={() =>
						setIsChecked((prevIsChecked) => !prevIsChecked)
					}
					checked={isChecked}
				/>
				<label className='form-check-label' htmlFor='flexCheckDefault'>
					Accept Terms & Conditions
				</label>
			</div>
		</>
	);
	return (
		<AppModal
			title='T&Cs'
			content={modalContent}
			cancelButtonText='Cancel'
			confirmButtonText='Confirm'
			resetInputs={resetInputs}
			confirmButtonStatus={isChecked ? null : 'disabled'}
		/>
	);
};

export default TermsAndConditions;
