import {combineReducers} from 'redux';

import job from './job';
import company from './company';
import category from './category';

const appReducer = combineReducers({
  job,
  company,
  category,
});

export default appReducer;
