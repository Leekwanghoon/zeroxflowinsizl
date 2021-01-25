import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { Provider }from 'react-redux';
import rootReducer from './_reducers';
import ReduxThunk from 'redux-thunk';

 
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        }
    }
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    // const store = createStore(rootReducer, composeEnhancers())
    const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <App />
    </Provider>,
    document.getElementById('root')
);



