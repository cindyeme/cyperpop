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
  ROUTES: { NFTS },
} = CONSTANTS;

// CREATING A SLICE

// creating and handling dispatched actions using corresponding reducers
const slice = createSlice({
  name: 'auth',
  initialState: {
    tokens: null,

    unique: null,

    balance: null,
  },
  reducers: {
    // General Succesful Api Call Handler
    getTokens: (state, action) => {
      state.tokens = action.payload.tokens;
    },

    uniqueToken: (state, action) => {
      state.unique = action.payload.success;
    },

    tokenAmount: (state, action) => {
      state.balance = action.payload.remaining_token;
    },
  },
});

// -------------------------------------*****----------------------------------------

// ACTIONS

// extracting actions from slice
export const { getTokens, uniqueToken, tokenAmount } = slice.actions;

// -------------------------------------*****----------------------------------------
// ACTION CREATORS

// utility variables

// Users SIGN_UP

export const checkTokens = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: NFTS.CHECK,

      data,

      method: REQUEST_METHODS.POST,

      // onStart: updateAttempt.type,

      onSuccess: uniqueToken.type,

      // onError: updateFailed.type,
    })
  );

export const checkBalance = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: NFTS.CHECK,

      data,

      method: REQUEST_METHODS.POST,

      // onStart: updateAttempt.type,

      onSuccess: tokenAmount.type,

      // onError: updateFailed.type,
    })
  );

export const mintTokens = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: NFTS.MINT,

      data,

      method: REQUEST_METHODS.POST,

      // onStart: updateAttempt.type,

      onSuccess: uniqueToken.type,

      // onError: updateFailed.type,
    })
  );

// -------------------------------------*****----------------------------------------
// SELECTORS

// selecting the app  state

const auth = (state) => state.tokens.nft;

// selecting the state

export const userTokens = createSelector([auth], (user) => user?.tokens);

export const tokenUnique = createSelector([auth], (user) => user?.unique);

export const tokenBalance = createSelector([auth], (user) => user?.balance);

export default slice.reducer;
