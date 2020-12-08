import { connect } from 'react-redux'; 
import { React, Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Board from './Board'; 
import TaskList from './TaskList';
import ActionButton from './ActionButton'; 

class App extends Component {

  onDragEnd = () => {

  }

  render() {
    //const { boards } = this.props;  
    const { task_lists } = this.props; 
    return (
      <DragDropContext onDragEnd={this.onDragEnd} >
        <div> Board Name
          <div style={styles.listContainer}>
            {/* { boards.map(board => <Board name={board.name} task_lists={board.task_lists} /> )} */}
            { task_lists.map(list => <TaskList listID={list.id} key={list.id} name={list.name} task_cards={list.task_cards} />)}
            <ActionButton list />
          </div>
          
        </div>
      </DragDropContext>
      
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
