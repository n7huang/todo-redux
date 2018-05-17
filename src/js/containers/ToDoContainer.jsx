import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import Header from "../components/Header";
import Title from "../components/Title";
import ToDoList from "../components/ToDoList.jsx";
import * as Actions from "../actions/actions"

class ToDoContainer extends React.Component {

  state = { // if state does not rely on props, can just define like this
    todos: []
  }

  // main change: => instead of bind
  render() {
    const {actions, todos} = this.props;

    return (
      <div>
        <Header title={"To-Do List"} />
        <h3>To-Do</h3>
        <ToDoList 
          todos={todos} 
          addToDo={actions.addToDo}
          removeToDo={actions.removeToDo}
          editToDo={actions.editToDo} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoContainer)

