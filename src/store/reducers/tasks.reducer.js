import C from '../constants';

const { ADD_TASK, UPDATE_TASK, REMOVE_TASK } = C;

const singleTask = (task = {}, { type, payload }) => {
    switch(type) {
        case ADD_TASK:
            return { ...payload };
        case UPDATE_TASK:
            return {
                ...task,
                listId: (payload.listId !== "") ? payload.listId : task.listId,
                title: (payload.title !== "") ? payload.title : task.title,
                completed: payload.completed 
            };
        default:
            return { ...task };
    }
};

const tasks = (tasks = [], { type, payload }) => {
    switch(type) {
        case ADD_TASK:
            const newTask = singleTask({}, { type, payload });
            return [
                ...tasks,
                newTask
            ];
        case UPDATE_TASK:
            return tasks
                        .map(task => 
                            (task.id === payload.id) ? 
                            singleTask(task, { type, payload }) : 
                            task
                        )
        case REMOVE_TASK:
            return tasks.filter(task => task.id !== payload);
        default:
            return [ ...tasks ];
    }
};

export default tasks;