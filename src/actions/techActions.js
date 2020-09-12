import {
  ADD_TECH,
  GET_TECHS,
  DELETE_TECH,
  SET_LOADING
} from './types';


export const getTechs = () => async dispatch => {
  setLoading(); 
  const res = await fetch('/techs');
  const data = await res.json();
  dispatch({type: GET_TECHS, payload: data});
}

export const setLoading = () => ({ type: SET_LOADING });

export const addTech = tech => async dispatch => {
  const config = {
    method: 'POST',
    body: JSON.stringify(tech),
    headers: {
      'Content-Type': 'application/json'
    }
  };   
  const res = await fetch('/techs', config);
  const data = await res.json();
  dispatch({type: ADD_TECH, payload: data});
}

export const deleteTech = id => async dispatch => {
  const config = {
    method: 'DELETE',
  };  
  const res = await fetch(`/techs/${id}`, config);
  const data = await res.json();
  dispatch({type: DELETE_TECH, payload: id});
}
