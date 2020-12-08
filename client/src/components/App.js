import { connect } from 'react-redux'; 
import { React, Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Board from './Board'; 
import TaskList from './TaskList';
import ActionButton from './ActionButton';
import { sort } from '../actions'; 

const ListContainer = styled.div`
    display: flex;
    flex-direction: row 
`; 

class App extends Component {

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result; 
    if (!destination) {
      return; 
    }

    this.props.dispatch(sort(
      source.droppableId, 
      destination.droppableId, 
      source.index, 
      destination.index, 
      draggableId, 
      type
    ))

  }

  render() {
    //const { boards } = this.props;  
    const { task_lists } = this.props; 
    return (
      <DragDropContext onDragEnd={this.onDragEnd} >
        <div> Board Name
          <Droppable droppableId='all-lists' direction='horizontal' type='list'>
            { provided => (
              <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
              {/* { boards.map(board => <Board name={board.name} task_lists={board.task_lists} /> )} */}
              { task_lists.map((list, index) => 
              <TaskList listID={list.id} 
                        key={list.id} 
                        name={list.name} 
                        task_cards={list.task_cards}
                        index={index} />)}
              <ActionButton list />
            </ListContainer>
            )}
            
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
};

const mapStateToProps = state => ({
  //boards: state.task_boards
  task_lists: state.task_lists 
})

export default connect(mapStateToProps)(App);
