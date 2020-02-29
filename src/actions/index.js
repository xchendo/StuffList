export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (todo) => {
    const action = {
        type: ADD_TODO,
        todo
    }
    return action;
}

export const removeTodo = (todo) => {
    const action = {
        type: REMOVE_TODO,
        todo
    }
    return action;
}