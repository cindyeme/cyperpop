/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

import { createSelector } from 'reselect';

import { Alert, TYPE } from '../../../components/alert';

// CREATING A SLICE

// creating and handling dispatched actions using corresponding reducers
const slice = createSlice({
  name: 'layout',

  initialState: {
    loading: true,

    validating: true,

    uploading: false,

    updating: false,

    deactivating: false,
  },

  reducers: {
    // General Api Or Action Init Handler

    updateAttempt: (state) => {
      // show spinner

      state.updating = true;
    },
    updateFailed: (state, action) => {
      // show spinner

      state.updating = false;

      Alert(action.payload, TYPE.ERROR, { position: 'top-center' });
    },

    updateSuccess: (state, action) => {
      // hide spinner

      state.updating = false;

      Alert(action.payload.message || 'Updated Successfully!', TYPE.SUCCESS, {
        position: 'top-center',
      });

      // Alert('Details Updated Successfully...', TYPE.SUCCESS);
    },

    uploadAttempt: (state) => {
      // show spinner

      state.uploading = true;
    },
    uploadFailed: (state) => {
      // show spinner

      state.uploading = false;

      Alert('Upload Failed!', TYPE.ERROR, { position: 'top-center' });
    },

    uploadSuccess: (state) => {
      // hide spinner

      state.uploading = false;

      // Alert('Upload Successfull!', TYPE.SUCCESS, {
      //   position: 'top-center',
      // });

      // Alert('Details Updated Successfully...', TYPE.SUCCESS);
    },

    postValidation: (state, action) => {
      state.validating = false;

      Alert(action.payload, TYPE.ERROR, { position: 'top-center' });
    },

    detailsUpdateAttempt: (state) => {
      // show spinner

      state.detailsUpdate = true;
    },
    detailsUpdateFailed: (state, action) => {
      // hide spinner

      state.detailsUpdate = false;

      Alert(action.payload, TYPE.ERROR, { position: 'top-center' });
    },

    detailsUpdateSuccess: (state, action) => {
      // hide spinner

      state.detailsUpdate = false;

      Alert(action.payload.message || 'Updated Successfully!', TYPE.SUCCESS, {
        position: 'top-center',
      });
    },

    deactivateAttempt: (state) => {
      // show spinner

      state.deactivating = true;
    },
    deactivateFailed: (state, action) => {
      // show spinner

      state.deactivating = false;

      Alert(action.payload, TYPE.ERROR, { position: 'top-center' });
    },

    deactivateSuccess: (state, action) => {
      // hide spinner

      state.deactivating = false;

      Alert(action.payload.message || 'Account Deleted Successfully!', TYPE.SUCCESS, {
        position: 'top-center',
      });
    },

    actionAttempt: (state) => {
      // show spinner

      state.loading = true;
    },

    // General Succesful Api Call Handler

    actionSuccess: (state) => {
      // hide spinner

      state.loading = false;
    },

    actionSuccessMessage: (state, action) => {
      // hide spinner

      state.loading = false;

      Alert(action.payload.message, TYPE.SUCCESS);
    },

    actionFailed: (state, action) => {
      state.loading = false;

      Alert(action.payload, TYPE.ERROR, { position: 'top-center' });
    },

    // general unSuccesful  validation

    actionFailedMaster: (state) => {
      state.loading = false;
    },
  },
});

// -------------------------------------*****----------------------------------------

// ACTIONS

// extracting actions from slice
export const {
  updateAttempt,
  updateFailed,
  updateSuccess,
  deactivateAttempt,
  deactivateFailed,
  deactivateSuccess,
  actionAttempt,
  actionFailed,
  actionFailedMaster,
  actionSuccessMessage,
} = slice.actions;

// -------------------------------------*****----------------------------------------
// ACTION CREATORS

// -------------------------------------*****----------------------------------------
// SELECTORS

// selecting the app loading state

const isUpdating = (state) => state.layouts.display;

export const selectAppLoadState = createSelector([isUpdating], (app) => app.loading);

export const selectUpdateState = createSelector([isUpdating], (app) => app.updating);

export const selectDetailsUpdate = createSelector([isUpdating], (app) => app.detailsUpdate);

export const loadingDetails = createSelector([isUpdating], (professions) => professions.detailsLoad);

export default slice.reducer;
