/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

import { createSelector } from 'reselect';

import { apiCallInit } from '../../actions';

// import {
//   actionSuccessMessage,
//   updateAttempt,
//   updateFailed,
//   updateSuccess,
//   postValidation,
//   updateSuccessPlain,
// } from '../layouts/display';

import CONSTANTS from '../../constants';

// import { Alert, TYPE } from '../../../components/alert';

const {
  REQUEST_METHODS,
  ROUTES: { USERS },
} = CONSTANTS;

// CREATING A SLICE

// creating and handling dispatched actions using corresponding reducers
const slice = createSlice({
  name: 'auth',
  initialState: {
    provider: null,

    account: null,

    contract: null,

    user: null,

    profile: null,
  },
  reducers: {
    // General Succesful Api Call Handler
    setProvider: (state, action) => {
      state.provider = action.payload.provider;

      state.account = action.payload.account;

      state.contract = action.payload.contract;
    },

    createUser: (state, action) => {
      state.user = action.payload;
    },

    editUser: (state, action) => {
      state.profile = action.payload.profile ? action.payload.profile : action.payload;
    },
  },
});

// -------------------------------------*****----------------------------------------

// ACTIONS

// extracting actions from slice
export const { setProvider, createUser, editUser } = slice.actions;

// -------------------------------------*****----------------------------------------
// ACTION CREATORS

// utility variables

// Users LOGIN
export const userAuth = (data) => async (dispatch) => dispatch(setProvider(data));

// Users SIGN_UP

export const userRegister = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.SIGN_UP,

      method: REQUEST_METHODS.POST,

      credentials: true,

      // onStart: updateAttempt.type,

      onSuccess: createUser.type,

      // onError: updateFailed.type,
    })
  );

export const userEdit = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.EDIT_USER,

      method: REQUEST_METHODS.POST,

      credentials: true,

      // onStart: updateAttempt.type,

      onSuccess: editUser.type,

      // onError: updateFailed.type,
    })
  );

export const userEditPic = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.EDIT_USER,

      method: REQUEST_METHODS.POST,

      credentials: true,

      contentType: 'multipart/form-data',

      // onStart: updateAttempt.type,

      // onSuccess: editUser.type,

      // onError: updateFailed.type,
    })
  );

export const getUser = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.GET_USER,

      method: REQUEST_METHODS.POST,

      credentials: true,

      // onStart: updateAttempt.type,

      onSuccess: editUser.type,

      // onError: updateFailed.type,
    })
  );

export const followUser = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.FOLLOW_USER,

      method: REQUEST_METHODS.POST,

      credentials: true,

      // onStart: updateAttempt.type,

      // onSuccess: editUser.type,

      // onError: updateFailed.type,
    })
  );

export const unfollowUser = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.UNFOLLOW_USER,

      method: REQUEST_METHODS.POST,

      credentials: true,

      // onStart: updateAttempt.type,

      // onSuccess: editUser.type,

      // onError: updateFailed.type,
    })
  );

export const getFollowers = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.GET_FOLLOWERS,

      method: REQUEST_METHODS.POST,

      credentials: true,

      // onStart: updateAttempt.type,

      // onSuccess: editUser.type,

      // onError: updateFailed.type,
    })
  );

// -------------------------------------*****----------------------------------------
// SELECTORS

// selecting the app  state

const auth = (state) => state.users.auth;

// selecting the state

export const providerInstance = createSelector([auth], (user) => user?.provider);

export const currentAccount = createSelector([auth], (user) => user?.account);

export const contractInstance = createSelector([auth], (user) => user?.contract);

export const currentProfile = createSelector([auth], (user) => user?.profile);

export default slice.reducer;
