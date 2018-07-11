import { createSelector } from 'reselect';

const exampleDataSelector = state => state.example;
//const fooSelector = state => state.formResponse;

const resultSelector = createSelector(
  exampleDataSelector,
  payload => payload.get('result')
);

const formDataSelector = createSelector(
  exampleDataSelector,
  (formData) => formData
);

export const formResponseSelector = state => ({
  formData: formDataSelector(state).get('formResponse'),
  currentQuestion: formDataSelector(state).get('currentQuestion')
});
