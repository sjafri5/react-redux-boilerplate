import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

import type { exampleType } from '../../common/types/example'

const SUBMIT_RESPONSE= 'SUBMIT_RESPONSE';
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

export const actions = {
  submitResponse,
  nextQuestion
};

export const reducers = {
  [SUBMIT_RESPONSE]: (state, { payload }) => {
    console.log('raza', state.get('formResponse'));
    console.log('pl', payload);
    const sip= state.get('formResponse').merge(payload.formResponse)
    return state.set('formResponse', sip)
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
    currentQuestion: 1,
    formResponse: new Map(),
  })

export default handleActions(reducers, initialState());
