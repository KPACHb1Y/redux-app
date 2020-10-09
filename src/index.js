import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import './style.css';
import {rootReducer} from "./redux/rootReducer";
import {asyncIncrement, changeTheme, decrement, increment} from "./redux/actions";

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger),
    )
);


addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement());
});

store.subscribe(() => {
    const state = store.getState();

    counter.textContent = state.counter;
    document.body.className = state.theme.value;

    [addBtn, subBtn, themeBtn].forEach(btn => btn.disabled = state.theme.disabled)
});

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
    store.dispatch(changeTheme(newTheme))
});

store.dispatch({type: 'INIT_APP'})


