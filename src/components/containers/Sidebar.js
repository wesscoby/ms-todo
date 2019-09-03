import Sidebar from '../ui/Sidebar';
// import { PropTypes } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  lists: state.lists,
  activeList: state.activeList
});

const mapDispatchToProps = dispatch => 
  ({
    addList: (id, name, icon, color) => {
      dispatch({
        type: "ADD_LIST",
        payload: {
          id, name, icon, color
        }
      })
    },
    removeList: id => {
      dispatch({
        type: "REMOVE_LIST",
        payload: id
      })
    },
    changeActive: id => {
      dispatch({
        type: "CHANGE_ACTIVE",
        payload: id
      })
    }
  })  

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)  
