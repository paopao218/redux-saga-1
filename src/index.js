import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore, applyMiddleware } from 'redux';
import createSageMiddleware from 'redux-saga';
import { composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { rootReducers } from './reducers';
import { watchgaddAsync } from './sagas/index';
import './index.css';
import App from './App';
//创建saga中间件
const sagaMiddleware = createSageMiddleware();
const store = legacy_createStore(rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchgaddAsync);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    ,
    document.getElementById('root')

);

