import { changeActive } from './activeList.action';
import { addList, updateList, removeList } from './lists.action';
import { addTask, updateTask, removeTask } from './tasks.action';

const actions = {
    addList, updateList, removeList,
    addTask, updateTask, removeTask,
    changeActive
}

export default actions;