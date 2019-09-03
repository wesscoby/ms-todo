import { connect } from 'react-redux'
// import { PropTypes } from 'react';
import Sidebar from '../ui/Sidebar';
import actions from '../../store/actions';

const { addList, removeList, changeActive } = actions;

const mapStateToProps = (state) => ({
  lists: state.lists,
  tasks: state.tasks,
  activeList: state.activeList
});

const mapDispatchToProps = dispatch => 
  ({
    addList: (id, name, icon, color) => {
      dispatch(addList(id, name, icon, color))
    },
    removeList: id => {
      dispatch(removeList(id))
    },
    changeActive: id => {
      dispatch(changeActive(id))
    }
  })  

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)  
