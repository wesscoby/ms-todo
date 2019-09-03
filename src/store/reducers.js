import { combineReducers } from 'redux'
import C from './constants';

const {
    ADD_LIST, UPDATE_LIST, REMOVE_LIST,
    ADD_TASK, UPDATE_TASK, REMOVE_TASK, 
    CHANGE_ACTIVE
} = C;

// List and Task Objects
const singleList = (state = {}, { type, payload }) => {
    switch(type) {
        case ADD_LIST:
            return { ...payload };
        case UPDATE_LIST:
            return {
                ...state,
                name: payload.name || state.name,
                icon: payload.icon || state.icon,
                color: payload.color || state.color,
                active: payload.active || state.active
            };
        default:
            return { ...state };
    }
};

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

// List and Task arrays
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


const lists = (state = [], { type, payload }) => {
    switch(type) {
        case ADD_LIST:
            return [
                ...state,
                singleList({}, { type, payload })
            ];
        case UPDATE_LIST:
            //TODO Function to update list
            return state.map((list, index) => { return list });
        case REMOVE_LIST:
            return state.filter(list => list.id !== payload);
        default:
            return [ ...state ];
    }
};

const activeList = (state = "", { type, payload }) => {
    switch(type) {
        case CHANGE_ACTIVE:
            return payload;
        default:
            return state;
    }
}


export default combineReducers({
    lists, tasks, activeList
});



// {
//     if(task.id === payload.id) {
//         return {
//             ...task,
//             singleTask(task, { type, payload })
//         }
//     }
// }

// store.dispatch({type: "UPDATE_TASK", payload: {
//     id: 2,
//     title: "This title better change"
// }})