import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import Spinner from '../layouts/Spinner';
import LogItem from './LogItem';
import { getLogs } from '../../actions/logActions';
import { addAlert } from '../../actions/alertActions';

const Logs = ({ getLogs, logs, loading, logMsg, addAlert, techMsg }) => {

  useEffect(() => {
    if ( logs === null ) getLogs();
    if (logMsg) addAlert(logMsg, 'bg-green-700');
    else if (techMsg) addAlert(techMsg, 'bg-green-700');
  }, [logMsg, techMsg]);
  
  if (loading || logs === null) return <Spinner />    

  return (
    <div className='mx-auto my-4 border w-2/3'>
      <h1 className='text-4xl p-4 border-b text-center'>System Logs</h1>
      { logs.map( logItem => <LogItem key={logItem.id} logItem={logItem} />) }
    </div>
  );

}

const mapStateToProps = state => ({
  logs: state.log.logs,
  loading: state.log.loading,
  logMsg: state.log.msg,
  techMsg: state.tech.msg
});

export default connect(
  mapStateToProps,
  { getLogs, addAlert }
)(Logs);
