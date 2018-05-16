import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes"

// action creators
export const addToDo = text => {
	console.log(ADD_TODO)
	return {
		type: ADD_TODO,
		text
	}
}

export const editToDo = (text, todoId) => {
	return {
		type: EDIT_TODO,
		text,
		todoId
	}
}

export const removeToDo = todoId => {
	return {
		type: REMOVE_TODO,
		todoId
	}
}

export const toggleToDo = todoId => {
	return {
		type: TOGGLE_TODO,
		todoId
	}
}