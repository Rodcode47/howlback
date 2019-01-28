import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
//import registerServiceWorker from './registerServiceWorker';

// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

var http = require("http");
setInterval(function() {
    http.get("https://howlback.herokuapp.com");
}, 300000); // every 5 minutes (300000)

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
