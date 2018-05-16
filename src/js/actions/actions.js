// action types
export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

// action creators
export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	}
}

export function editTodo(text, todoId) {
	return {
		type: EDIT_TODO,
		text,
		todoId
	}
}

export function removeTodo(todoId) {
	return {
		type: REMOVE_TODO,
		todoId
	}
}

export function toggleTodo(todoId) {
	return {
		type: TOGGLE_TODO,
		todoId
	}
}