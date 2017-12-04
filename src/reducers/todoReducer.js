
const initialState = {
  todos: [{
    id: 1,
    title: 'first redux todo'
  }]
}

const todoReducer = (state = initialState, action) => {   // action = {type: 'ADD_TODO', payload: {id: 1, title: 'First Todo', status: 'Not Done'}}
  switch(action.type){
    case 'ADD_TODO':
      return {...state, todos: state.todos.concat(action.payload)}

    case 'REMOVE_TODO':
      let todoId = action.payload;
      let todoToRemove = state.todos.findIndex(todo => todo.id === todoId);
      state = state.todos.splice(todoToRemove, 1);
      return state;

    case 'UPDATE_TODO':



    default:
      return state;
  }
}

export default todoReducer;
