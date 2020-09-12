import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteLog, setCurrent } from '../../actions/logActions';
import { addAlert } from '../../actions/alertActions';
import { setModal } from '../../actions/modalActions';

const LogItem = ({ logItem: { id, message, attention, tech, date }, deleteLog, addAlert, setCurrent, setModal }) => {
  const onDelete = () => {
    addAlert('Deleting log...', 'bg-gray-600'); 
    deleteLog(id);
  }
  const editPre = () => {
    setCurrent({id, message, attention, tech}); 
    setModal('MODAL_LOG_EDIT');
  }
  return (
    <div className='m-4 border-b'>
      <a href='#!' onClick={editPre} className={`my-2 ${attention ? 'text-red-600':'text-blue-600'}`}>{message}</a> 
      <div className='flex justify-between'>
        <div>
          {`ID #${id} `}
          <span className='text-gray-500'>last updated by </span>
            {tech}
          <span className='text-gray-500'>
            {' on '}
            <Moment format='MMM D YYYY, h:mm:ss a'>{date}</Moment>
          </span>
        </div>
        <a onClick={onDelete} href='#!'><i className='fas fa-trash text-gray-500' /></a>
      </div>
    </div>
  );
}

export default connect(
  null,
  { deleteLog, addAlert, setCurrent, setModal }
)(LogItem);
