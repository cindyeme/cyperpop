import { createAction } from '@reduxjs/toolkit';

// Creating Actions For Api Calls
export const apiCallInit = createAction('api/callInit');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');
