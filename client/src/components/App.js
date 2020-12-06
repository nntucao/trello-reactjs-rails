import './App.css';

import { connect } from 'react-redux'; 
import { Component } from 'react';
import Board from './Board'; 
import TaskList from './TaskList';

class App extends Component {
  render() {
    //const { boards } = this.props;  
    const { task_lists } = this.props; 
    return (
      <div className="App"> Board Name
        <div style={styles.listContainer}>
          {/* { boards.map(board => <Board name={board.name} task_lists={board.task_lists} /> )} */}
          { task_lists.map(list => <TaskList name={list.name} task_cards={list.task_cards} />)}
        </div>
      </div>
      
    );
  }
};

const styles = {
  listContainer: {
    display: 'flex', 
    flexDirection: 'row',
    marginRight: 8, 
    marginLeft: 8
  }
}

const mapStateToProps = state => ({
  //boards: state.task_boards
  task_lists: state.task_lists 
})

export default connect(mapStateToProps)(App);
