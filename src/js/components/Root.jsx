import React, { Component, PropTypes } from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import uuid from 'uuid';
import logger from 'redux-logger';

import todoReducer from "../reducers/reducer"
import ToDoContainer from "./ToDoContainer.jsx"

const initialState = {
	todos: []
}


export default class Root extends Component
{
	render()
	{
		const store = createStore(todoReducer, initialState, compose(applyMiddleware(logger)));
				
		return (
			<Provider store={store}>
				<ToDoContainer />
			</Provider>
		)
	}
}


