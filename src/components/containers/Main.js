import Main from '../ui/Main';
import { connect } from 'react-redux';
import actions from '../../store/actions';

const { addTask, removeTask, updateTask } = actions;

const mapStateToProps = ({ lists, tasks, activeList }) => 
  ({
    lists, tasks, activeList
  })

const mapDispatchToProps = dispatch => 
  ({

    addTask: ({id, listId, title, completed}) => {
      dispatch(addTask({ id, listId, title, completed }))
    },

    updateTask: ({ id, listId = "", title = "", completed = false }) => {
      dispatch(updateTask({ id, listId, title, completed }))
    },
    
    removeTask: id => {
      dispatch(removeTask(id))
    }
  })  

export default connect(mapStateToProps, mapDispatchToProps)(Main)  