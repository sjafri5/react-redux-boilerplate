import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import remove from 'lodash/remove';

import type { exampleType } from '../../common/types/example'

const SUBMIT_RESPONSE= 'SUBMIT_RESPONSE';
const UPDATE_SHORT_KEYS= 'UPDATE_SHORT_KEYS';
const NEXT_QUESTION= 'NEXT_QUESTION';

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

export const nextQuestion= createAction(NEXT_QUESTION, (currentQuestion) =>{
  let reviewForm;
  let nextQuestion = currentQuestion
  if (currentQuestion < 26) {
    nextQuestion = nextQuestion + 1;
    reviewForm = false
  } else {
    reviewForm = true
  }

  return  {
    currentQuestion: nextQuestion,
    reviewForm
  }
});

export const updateShortKeys= createAction(UPDATE_SHORT_KEYS, (shortKeys) =>{
  return  {
    shortKeys
  }
});


export const actions = {
  submitResponse,
  updateShortKeys,
  nextQuestion
};

export const reducers = {
  [SUBMIT_RESPONSE]: (state, { payload }) => {
    const sip= state.get('formResponse').merge(payload.formResponse)
    return state.set('formResponse', sip)
  },
  [UPDATE_SHORT_KEYS]: (state, { payload }) => {
    console.log('payload', payload);
    return state.merge({
      ...payload,
    })
  },
  [NEXT_QUESTION]: (state, { payload }) => {
    return state.merge({
      ...payload,
    })
  },
}



export const initialState = () =>
  Map({
    reviewForm: false,
    currentQuestion: 0,
    shortKeys: new List(),
    formResponse: new Map(),
  })

export default handleActions(reducers, initialState());
