import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import v4 from 'uuid/v4';
import remove from 'lodash/remove';

const SET_START= 'SET_START';

// ------------------------------------
// Actions
// ------------------------------------
export const setStart= createAction(SET_START, () =>{
  const timestamp = Date.now();
  const uuid =  v4();

  firebase.database().ref('analytics/' + uuid).set({
    startTime: timestamp
  });

  return  {
    uuid,
    timestamp 
  }
});

export const actions = {
  setStart
};

export const reducers = {
  [SET_START]: (state, { payload }) => {
    return state.merge(payload)
  },
}

export const initialState = () =>
  Map({
    uuid: '',
    startTime: undefined,
    endTime: undefined
  })

export default handleActions(reducers, initialState());
