import C from '../constants';

const { ADD_TASK, UPDATE_TASK, REMOVE_TASK } = C;

const singleTask = (state = {}, { type, payload }) => {
    switch(type) {
        case ADD_TASK:
            return { ...payload };
        case UPDATE_TASK:
            return {
                ...state,
                title: payload.title || state.title,
                completed: payload.completed || state.completed
            };
        default:
            return { ...state };
    }
};

const tasks = (state = [], { type, payload }) => {
    switch(type) {
        case ADD_TASK:
            const newTask = singleTask({}, { type, payload });
            return [
                ...state,
                newTask
            ];
        case UPDATE_TASK:
            return [ ...state ]
        case REMOVE_TASK:
            return state.filter(task => task.id !== payload);
        default:
            return [ ...state ];
    }
};

export default tasks;