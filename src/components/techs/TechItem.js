import React from 'react';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions'; 
import { addAlert } from '../../actions/alertActions'; 

const TechItem = ({ techItem: { id, firstName, lastName }, deleteTech, addAlert }) => {
  const onDelete = () => {
    addAlert('Deleting tech...', 'bg-gray-600'); 
    deleteTech(id);
  };
  return (
    <div className='flex p-4 justify-between items-center border-b'>
      <div>{firstName}{' '}{lastName}</div>
      <a onClick={onDelete} href='#!'><i className='fas fa-trash'/></a>
    </div>
  );
};

export default connect(
  null,
  { deleteTech, addAlert }
)(TechItem);
