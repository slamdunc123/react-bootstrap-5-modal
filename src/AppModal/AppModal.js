import React, {useState, useEffect, useRef} from 'react';
import {Modal} from 'bootstrap'

const AppModal = ({title, content, cancelButtonText, confirmButtonText, resetInputs, confirmButtonStatus, loginUser}) => {
    const [modal, setModal] = useState(null)
    const exampleModal = useRef()

    const handleCancelOnClick = () => { 
        modal.hide()
        resetInputs()
     }
    const handleConfirmOnClick = () => { 
        modal.hide()
        resetInputs()
        if(loginUser) loginUser()
     }

    useEffect(() => {
     setModal(new Modal(exampleModal.current))
    }, [])
    
	return (
		<>
			<button
				type='button'
				className='btn btn-primary m-1'
                onClick={() => modal.show()}
			>
				{title}
			</button>

			<div
				className='modal'
				ref={exampleModal}
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								{title}
							</h5>
							<button
								type='button'
								className='btn-close'
                                onClick={handleCancelOnClick}
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>{content}</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
                                onClick={handleCancelOnClick}
							>
								{cancelButtonText}
							</button>
							<button type='button' className='btn btn-primary' onClick={handleConfirmOnClick} disabled={confirmButtonStatus}>
								{confirmButtonText}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AppModal;
