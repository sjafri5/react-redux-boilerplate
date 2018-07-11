import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

import type { exampleType } from '../../common/types/example'

const SUBMIT_RESPONSE= 'SUBMIT_RESPONSE';

export const constants = {
  SUBMIT_RESPONSE,
};

// ------------------------------------
// Actions
// ------------------------------------
export const submitResponse = createAction(SUBMIT_RESPONSE, (form) =>{
     return  {
       formResponse: { [form.questionNumber] : form.response} 
      }
});

export const actions = {
  submitResponse,
};

export const reducers = {
  [SUBMIT_RESPONSE]: (state, { payload }) => {
    console.log('payload', payload);
    console.log('state', state.toJS());
    return state.merge({
      ...payload,
    })
  },
}

export const initialState = () =>
  Map({
    currentQuestion: 1,
    formResponse: {},
  })

export default handleActions(reducers, initialState());
