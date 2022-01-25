import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import Modal from 'react-modal';

import appStore from './store/store';

import W3Connection from './store/provider';

import History from './utils/history';

import { Web3ReactProvider } from '@web3-react/core';

import 'font-awesome/css/font-awesome.min.css';
import './styles/styles.css'
// Initializes The App Store

const state = appStore();
// exporting state to enable dispatch usage outside react component
export const { storeConfig, persistedStore } = state;

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeConfig}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Web3ReactProvider getLibrary={async () => await W3Connection().provider}>
          <Router history={History}>
            <App />
          </Router>
        </Web3ReactProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
