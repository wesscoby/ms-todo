import C from '../constants';

const { CHANGE_ACTIVE } = C;

export const changeActive = id => ({
    type: CHANGE_ACTIVE,
    payload: id
});