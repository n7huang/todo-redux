import React, { Component, PropTypes } from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import uuid from 'uuid';

import todoReducer from "../reducers/reducer"
import ToDoContainer from "./ToDoContainer.jsx"

const initialState = {
	todos: []
}

export default class Root extends Component
{
	render()
	{
		const store = createStore(todoReducer, []);
				
		return (
			<Provider store={store}>
				<ToDoContainer />
			</Provider>
		)
	}
}