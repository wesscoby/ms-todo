import C from '../constants';

const { CHANGE_ACTIVE } = C;


const activeList = (state = "", { type, payload }) => {
    switch(type) {
        case CHANGE_ACTIVE:
            return payload;
        default:
            return state;
    }
}

export default activeList;