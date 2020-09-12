import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../actions/modalActions';
import { addTech } from '../../actions/techActions';
import { addAlert } from '../../actions/alertActions';

const ModalAddTech = ( { modal, setModal, addAlert, addTech } ) => {

  const isShow = () => {
    return modal === 'MODAL_TECH_ADD'; 
  };

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');

  const unShow = e => {
    const id = e.target.id; 
    if (id === 'div_outter' || id === 'a_addTech') setModal(null);
  };

  const _addTech = () => {
    addAlert('Adding tech...', 'bg-gray-600');
    addTech({ firstName, lastName });
    setFirstName('');
    setLastName('');
  };

  return (
    <div id='div_outter' onClick={unShow} className={`flex fixed top-0 bottom-0 right-0 left-0 justify-center items-center bg-gray-800 bg-opacity-25 ${ isShow() ? '': 'hidden'}`}>
      <div className='bg-white shadow-xl p-4 w-full sm:w-4/5 flex flex-col rounded'>
        <h1 className='text-2xl'>New Technician</h1>
        <input type='text' name='firstName' value={firstName} onChange={ e => setFirstName(e.target.value) } className='w-full px-2 py-1 border-b my-4' placeholder='First Name' />
        <input type='text' name='lastName' value={lastName} onChange={ e => setLastName(e.target.value) } className='w-full px-2 py-1 border-b my-4' placeholder='Last Name' />
        <div className='flex my-2 justify-end'>
          <a id='a_addTech' onClick={_addTech} href='#!' className='rounded px-2 py-1 bg-green-600 text-white'>Add</a>
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => ({ 
    modal: state.modal.modal
  }),
  { setModal, addAlert, addTech }
)(ModalAddTech);
