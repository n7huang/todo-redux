import uuid from 'uuid';

import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/actionTypes"

const initialState = {
	todos: []
}

export default function todoReducer(state = initialState, action) {
	let index = -1;

	switch (action.type) {
		case ADD_TODO:
			console.log("reducer");
			return Object.assign({}, state, 
			{
				todos: [
					...state.todos,
					{
						text: action.text,
						done: false,
						id: uuid.v4()
					}
				]
			})

		case EDIT_TODO:
    	index = state.todos.findIndex(todo => todo.id === action.todoId);

    	if (index > -1) {
    		return Object.assign({}, state, 
				{
					todos:
						state.todos
							.slice(0, index)
							.concat([{
                ...state.todos[index],
                text: action.text
              }])
							.concat(state.todos.slice(index + 1))
				})
    	} else {
    		return state
    	}
			
		case REMOVE_TODO:
			index = state.todos.findIndex(todo => todo.id === action.todoId);

    	if (index > -1) {
    		return Object.assign({}, state, 
				{
					todos:
						state.todos
							.slice(0, index)
							.concat(state.todos.slice(index + 1))
				})
    	} else {
    		return state
    	}

		case TOGGLE_TODO: // maybe?
			index = state.todos.findIndex(todo => todo.id === action.todoId);

    	if (index > -1) {
    		return Object.assign({}, state, 
				{
					todos:
						state.todos
							.slice(0, index)
							.concat([{
                ...todos[index],
                done: !(todos[index].done)
              }])
							.concat(state.todos.slice(index + 1))
				})
    	} else {
    		return state
    	}

		default:
			return state
	}
}