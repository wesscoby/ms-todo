import C from '../constants';

const { ADD_LIST, UPDATE_LIST, REMOVE_LIST } = C;

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

export default lists;