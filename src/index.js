import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as reachBackend from './build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';
import { Provider } from 'react-redux';
import store from '../src/redux/store'

const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reach={reach} reachBackend={reachBackend}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
