import { createSelector } from 'reselect';

const exampleDataSelector = state => state.analytics;

const resultSelector = createSelector(
  exampleDataSelector,
  payload => payload.get('result')
);

const formDataSelector = createSelector(
  exampleDataSelector,
  (analytics) => analytics 
);

export const analyticsSelector = state => ({
  uuid: formDataSelector(state).get('uuid')
});
