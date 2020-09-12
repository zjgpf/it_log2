import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TechItem from './TechItem';
import Spinner from '../layouts/Spinner';
import { setModal } from '../../actions/modalActions';
import { getTechs, deleteTech } from '../../actions/techActions';
import { addAlert } from '../../actions/alertActions';

const ModalListTechs = ( { techs, modal, setModal, addAlert, getTechs, deleteTech, loading } ) => {

  useEffect(()=>{
    getTechs();
  }, []);

  const isShow = () => {
    return modal === 'MODAL_TECH_LIST'; 
  };

  const unShow = e => {
    const id = e.target.id; 
    if (id === 'div_outter') setModal(null);
  };

  const isAdd = modal === 'MODAL_LOG_ADD';
  
  return (
    <div id='div_outter' onClick={unShow} className={`flex fixed top-0 bottom-0 right-0 left-0 justify-center  items-center bg-gray-800 bg-opacity-25 ${ isShow() ? '': 'hidden'}`}>
      <div className='bg-white shadow-xl p-4 w-full sm:w-4/5 flex flex-col rounded'>
        <h1 className='text-2xl my-4'>Technician List</h1>
        <div className='border m-4 p-4'>
          { 
            loading || !techs ? <Spinner /> : techs.map( techItem => <TechItem key={techItem.id} techItem={techItem} /> )
          }
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => ({ 
    modal: state.modal.modal, 
    loading: state.tech.loading,
    techs: state.tech.techs
  }),
  { setModal, getTechs, addAlert, deleteTech }
)(ModalListTechs);
