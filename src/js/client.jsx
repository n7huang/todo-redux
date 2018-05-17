import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import logger from 'redux-logger';

import Root from "./containers/Root.jsx";
import todoReducer from "./reducers/reducer"
import ToDoContainer from "./containers/ToDoContainer.jsx"
import CounterContainer from "./containers/CounterContainer.jsx"

const initialState = {
	todos: []
}

const store = createStore(todoReducer, initialState, compose(applyMiddleware(logger)));

const counter = document.getElementById('counter');

const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<CounterContainer />
	</Provider>, 
	counter);

ReactDOM.render(
	<Provider store={store}>
		<ToDoContainer />
	</Provider>,
	app);
