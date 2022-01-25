import { combineReducers } from 'redux';

import userAuth from './auth';

// Combining All User Related Reducers
export default combineReducers({
  auth: userAuth
});
