import { SET_MODAL } from '../actions/types'; 

const initialState = { modal: null };

export default ( state=initialState, action ) => {
  switch(action.type) {
    case SET_MODAL: return { ...state, modal: action.payload };
    default: return state;
  }
};
