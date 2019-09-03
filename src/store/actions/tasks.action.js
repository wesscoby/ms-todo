import C from '../constants';

const { ADD_TASK, UPDATE_TASK, REMOVE_TASK } = C;

export const addTask = (id, listId, title, completed) => ({
    type: ADD_TASK,
    payload: {
        id, listId, title, completed
    }
});

export const updateTask = (id, listId, title, completed) => ({
    type: UPDATE_TASK,
    payload: {
        id, listId, title, completed
    }
});

export const removeTask = id => ({
    type: REMOVE_TASK,
    payload: id
});
