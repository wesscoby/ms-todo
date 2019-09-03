import Main from '../ui/Main';
import { connect } from 'react-redux';

const mapStateToProps = (state) => 
  ({
    lists: state.lists,
    activeList: state.activeList
  })

// const mapDispatchToProps = dispatch => 
//   ({
//     selectList: (id) => {
//       dispatch({
//         type: "SELECT_LIST",
//         payload: id
//       })
//     }
//   })  

export default connect(mapStateToProps)(Main)  