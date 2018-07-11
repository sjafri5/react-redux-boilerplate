import { createSelector } from 'reselect';

const exampleDataSelector = state => state.example;

const resultSelector = createSelector(
  exampleDataSelector,
  payload => payload.get('result')
);

export const formResponseSelector = state => ({
  result: resultSelector(state),
});
