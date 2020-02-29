import {ADD_TODO, REMOVE_TODO} from '../actions';
let initialState = {
    current_id: 0,
    todos: []
};

const todos = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
           return Object.assign({}, state, {
               todos: [
                   ...state.todos, {
                       todo:action.todo,
                       id: state.current_id + 1,
                   }
               ],
               current_id: state.current_id + 1,
           });

        case REMOVE_TODO:
            let todos = state.todos.filter(todo => todo.id !== action.todo.id);
            return Object.assign({}, state, {
                todos
            });
           
        default:
            return state;
    }
}

export default todos;