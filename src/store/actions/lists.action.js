import C from '../constants';

const { ADD_LIST, UPDATE_LIST, REMOVE_LIST } = C;

export const addList = ({ id, name, icon, color = "normal" }) => ({
    type: ADD_LIST,
    payload: {
        id, name, icon, color
    }
});

export const updateList = ({ id, name = "", icon = "", color = "" }) => ({
    type: UPDATE_LIST,
    payload: {
        id, name, icon, color
    }
});

export const removeList = id => ({
    type: REMOVE_LIST,
    payload: id
});