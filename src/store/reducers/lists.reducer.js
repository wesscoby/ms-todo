import C from '../constants';

const { ADD_LIST, UPDATE_LIST, REMOVE_LIST } = C;

const singleList = (list = {}, { type, payload }) => {
    switch(type) {
        case ADD_LIST:
            return { ...payload };
        case UPDATE_LIST:
            return {
                ...list,
                name: (payload.name !== "") ? payload.name : list.name,
                icon: (payload.icon !== "") ? payload.icon : list.icon,
                color: (payload.color !== "") ? payload.color : list.color
            };
        default:
            return { ...list };
    }
};

const lists = (lists = [], { type, payload }) => {
    switch(type) {
        case ADD_LIST:
            return [
                ...lists,
                singleList({}, { type, payload })
            ];
        case UPDATE_LIST:
            return lists
                        .map(list => 
                            (list.id === payload.id) ? 
                            singleList(list, { type, payload }) : 
                            list
                        );
        case REMOVE_LIST:
            return lists.filter(list => list.id !== payload);
        default:
            return [ ...lists ];
    }
};

export default lists;