import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import {compose, applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import reportWebVitals from './reportWebVitals';



// REDUCERS
import reducers from "./reducers"

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


//Redux setup
const store = createStore(reducers, compose(applyMiddleware(thunk)))



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
