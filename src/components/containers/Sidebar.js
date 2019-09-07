import { connect } from 'react-redux'
// import { PropTypes } from 'react';
import Sidebar from '../ui/Sidebar';
import actions from '../../store/actions';

const { addList, updateList, removeList, changeActive } = actions;

const mapStateToProps = ({ lists, tasks, activeList }) => ({
  lists, tasks, activeList
});


const mapDispatchToProps = dispatch => 
  ({

    addList: (id, name, icon, color) => {
      dispatch(addList(id, name, icon, color))
    },

    updateList: (id, name, icon, color) => {
      dispatch(updateList(id, name, icon, color))
    },

    removeList: id => {
      dispatch(removeList(id))
    },

    changeActive: id => {
      dispatch(changeActive(id))
    }
    
  })  

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)  
