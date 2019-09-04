import C from '../constants';

const { CHANGE_ACTIVE } = C;


const activeList = (activeList = "", { type, payload }) => {
    switch(type) {
        case CHANGE_ACTIVE:
            return payload;
        default:
            return activeList;
    }
}

export default activeList;