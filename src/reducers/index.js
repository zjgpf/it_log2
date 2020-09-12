import { combineReducers } from 'redux';
import logReducer from './logReducer';
import modalReducer from './modalReducer';
import alertReducer from './alertReducer';
import techReducer from './techReducer';

export default combineReducers({
  log: logReducer,
  modal: modalReducer,
  alert: alertReducer,
  tech: techReducer
});

