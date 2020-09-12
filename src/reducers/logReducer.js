import {
  SET_LOADING,
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  EDIT_LOG,
  SEARCH_LOGS
} from '../actions/types';

const initialState = {
  logs: null, 
  loading: false,
  msg: null,
  current: null
};

export default ( state=initialState, action ) => {
  switch( action.type ) {
    case SET_LOADING: return { ...state, loading: action.payload };
    case SET_CURRENT: return { ...state, current: action.payload };
    case GET_LOGS: 
    case SEARCH_LOGS:
      return { ...state, logs: action.payload };
    case ADD_LOG: return { ...state, logs: [ ...state.logs, action.payload ], msg: `Log added ID:${action.payload.id}` };
    case DELETE_LOG: return { ...state, logs: state.logs.filter( log => log.id !== action.payload ), msg: `Log deleted #ID:${action.payload}` };
    case EDIT_LOG: return { ...state, logs: state.logs.map( log => log.id === action.payload.id ? action.payload : log ), msg: `Log updated #ID:${action.payload.id},${action.payload.message},${action.payload.tech},${action.payload.attention}` };
    default: return state;
  }
}
