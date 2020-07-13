import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducer/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchData } from './utils';
import { fetchBooks, resetApp } from './reducer/actions';
import { BASE_URL } from './constants/constants';

const saveState = (state: RootStore) => {
    const serialisedState = JSON.stringify(state);
    window.localStorage.setItem('app_state', serialisedState);
};

const store = createStore(rootReducer, compose(applyMiddleware(logger), composeWithDevTools()));

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);

store.subscribe(() => {
    saveState(store.getState());
});

const { books } = store.getState();
if (!books.length) {
    fetchData(BASE_URL).then(data => {
        store.dispatch(resetApp);
        store.dispatch(fetchBooks(data.items));
    });
}
