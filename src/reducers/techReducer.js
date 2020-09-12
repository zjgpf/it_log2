import {
  ADD_TECH,
  GET_TECHS,
  DELETE_TECH,
  SET_LOADING
} from '../actions/types';

const initialState = {
  loading: false,
  techs: null,
  msg: null
};

export default ( state=initialState, action ) => {
  switch(action.type) {
    case SET_LOADING: return { ...state, loading: true };
    case GET_TECHS: return { ...state, techs: action.payload, loading: false };
    case ADD_TECH: return { ...state, techs: [...state.techs, action.payload], loading: false, msg: `Tech added: ${action.payload.firstName} ${action.payload.lastName}` };
    case DELETE_TECH: return { ...state, techs: state.techs.filter( tech => tech.id !== action.payload), loading: false, msg: `Tech deleted ${action.payload}` };
    default: return state;
  }
} 
