import { connect } from 'react-redux';

import TodoView from './TodoView';

import {addTodo} from '../../actions/todoAction';

const mapStateToProps = state => ({
  reduxTodos: state.todo.todos
});

export default connect(
  mapStateToProps,
  {
    hamroAddTodo: (todo) => addTodo(todo)
  }
)(TodoView);
