import TaskList from '../ui/TaskList';
import { connect } from 'react-redux';
import actions from '../../store/actions';

const { addTask, removeTask, updateTask } = actions;

const mapStateToProps = (state) => 
  ({
    lists: state.lists,
    tasks: state.tasks,
    activeList: state.activeList
  })

const mapDispatchToProps = dispatch => 
  ({
    addTask: (id, listId, title, completed) => {
      dispatch(addTask(id, listId, title, completed))
    },
    updateTask: (id, listId, title, completed) => {
      dispatch(updateTask(id, listId, title, completed))
    },
    removeTask: id => {
      dispatch(removeTask(id))
    }
  })  

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)  