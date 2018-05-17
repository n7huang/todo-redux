import React from "react";
import { connect } from "react-redux"

import Counter from "../components/Counter.jsx"

class CounterContainer extends React.Component {

	state = {
		count: 0
	}

	render() {
		return (
			<div>
				<div>Total: {this.props.todos.length}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect (
	mapStateToProps,
	null
)(CounterContainer)