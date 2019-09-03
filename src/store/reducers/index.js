import { combineReducers } from 'redux'
import lists from './lists.reducer';
import tasks from './tasks.reducer';
import activeList from './activeList.reducer';

export default combineReducers({
    lists, tasks, activeList
});