import { 
  SET_LOADING,
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  EDIT_LOG,
  SEARCH_LOGS
} from './types';

export const setLoading = loading => {
  return { type: SET_LOADING, payload: loading }
};

export const setCurrent = current => ({ type: SET_CURRENT, payload: current });

export const getLogs = () => async dispatch => {
  setLoading(true); 
  const res = await fetch('/logs');
  const data = await res.json();
  dispatch({
    type: GET_LOGS,
    payload: data
  });
  setLoading(false); 
};

export const addLog = log => async dispatch => { 
  const config = {
    method: 'POST',
    body: JSON.stringify(log),
    headers: {
      'Content-Type': 'application/json' 
    }
  };
  const res = await fetch('/logs', config);
  const data = await res.json();
  dispatch({
    type: ADD_LOG,
    payload: data 
  });
}

export const editLog = log => async dispatch => { 
  const config = {
    method: 'PUT',
    body: JSON.stringify(log),
    headers: {
      'Content-Type': 'application/json' 
    }
  };
  const res = await fetch(`/logs/${log.id}`, config);
  const data = await res.json();
  dispatch({
    type: EDIT_LOG,
    payload: data 
  });
}

export const deleteLog = id => async dispatch => {
  const config = {
    method: 'DELETE',
  };
  await fetch(`/logs/${id}`, config);
  dispatch({
    type: DELETE_LOG,
    payload: id
  });
};

export const searchLogs = text => async dispatch => {
  setLoading(true);
  const res = await fetch(`/logs?q=${text}`); 
  const data = await res.json();
  dispatch({
    type: SEARCH_LOGS,
    payload: data
  });
  setLoading(false);
};
