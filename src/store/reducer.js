import { combineReducers } from 'redux';

import layouts from './components/layouts/reducers';

import users from './components/users/reducers';

import tokens from './components/tokens/reducers';
// All Application Reducers Are Assembled Here
export default combineReducers({
  users,

  tokens,

  layouts,
});
