import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import example from './modules/example';
import analytics from './modules/analytics';

export default combineReducers({
  example,
  analytics,
  routing,
});
