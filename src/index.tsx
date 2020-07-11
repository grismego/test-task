import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducer/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const store = createStore(rootReducer, compose(applyMiddleware(logger), composeWithDevTools()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);
