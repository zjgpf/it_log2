import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../actions/modalActions';
import { addLog, editLog } from '../../actions/logActions';
import { addAlert } from '../../actions/alertActions';
import TechOptions from '../techs/TechOptions';

const ModalAddEditLog = ( { modal, setModal, addLog, addAlert, current, editLog } ) => {

  const initialState = {
    id: null,
    message: '',
    attention: false,
    tech: '' 
  };

  const [ state, setState ] = useState(initialState);
  const { message, attention, tech } = state;

  useEffect(()=>{
    if(modal === 'MODAL_LOG_EDIT') setState(current);
    else setState(initialState);
  }, [modal]);

  const isShow = () => {
    return ( modal === 'MODAL_LOG_ADD' || modal === 'MODAL_LOG_EDIT' )
  };

  const unShow = e => {
    const id = e.target.id; 
    if (id === 'div_outter' || id === 'btn_enter') setModal(null);
  };

  const addEditLog = () => {
    if (isAdd) { 
      addLog(state);
      addAlert('Adding log...', 'bg-gray-700', 1000);
    }
    else {
      editLog(state);
      addAlert('Editing log...', 'bg-gray-700', 1000);
    }
    setState(initialState);
  };

  const onChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const isAdd = modal === 'MODAL_LOG_ADD';
  
  return (
    <div id='div_outter' onClick={unShow} className={`flex fixed top-0 bottom-0 right-0 left-0 justify-center  items-center bg-gray-800 bg-opacity-25 ${ isShow() ? '': 'hidden'}`}>
      <div className='bg-white shadow-xl p-4 w-full sm:w-4/5 flex flex-col rounded'>
        <h1 className='text-2xl my-4'>Enter System Log</h1>
        <input name='message' value={message} onChange={onChange} type='text' placeholder='Log Message' className='block w-full border-b px-2 py-1 my-2'/>
        <select name='tech' value={tech} onChange={onChange} className='block py-1 px-2 my-4 bg-gray-200 rounded w-full'>
          <option vaule='' disabled>Select Technician</option>
          <TechOptions />
        </select>
        <div className='my-4'>
          <input name='attention' value={attention} checked={attention} onChange={() => setState({ ...state, attention: !attention })} type='checkbox' />
          <span className='ml-2 text-gray-600'>Need Attention</span>
        </div>
        <div className='flex justify-end my-4'>
          <button id='btn_enter' onClick={addEditLog} className={`px-2 py-1 ${isAdd ? 'bg-green-600':'bg-blue-600'} text-white rounded`}>{isAdd ? 'Add': 'Edit'}</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  modal: state.modal.modal,
  current: state.log.current
});

export default connect(
  mapStateToProps,
  { setModal, addLog, addAlert, editLog }
)(ModalAddEditLog);
