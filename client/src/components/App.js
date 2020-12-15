import { connect } from 'react-redux'; 
import { React, useEffect, useState, Component } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Board from './Board'; 
import TaskList from './TaskList';
import ActionButton from './CardListAction';
import { sort } from '../actions'; 
import Axios from 'axios';

const ListContainer = styled.div`
    display: flex;
    flex-direction: row 
`; 



function App({dispatch}) {

  const [task_lists, setLists] = useState([]);

  useEffect(() => {
    const getTaskListData = async () => {
      await fetch('http://localhost:3001/api/v1/task_lists')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        const lists = data.map((list) => ({
          id: list.id,
          name: list.name, 
          task_cards: list.task_cards
        }));
        setLists(lists);
      })
    }; 
    getTaskListData();
  },[]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result; 
    if (!destination) {
      return; 
    }

    dispatch(sort(
      source.droppableId, 
      destination.droppableId, 
      source.index, 
      destination.index, 
      draggableId, 
      type
    )) 

  }

  //render() {
    //const { boards } = this.props;  
    //const { task_lists } = this.props; 
    return (
      <DragDropContext onDragEnd={onDragEnd} >
        <div> Board Name
          <Droppable droppableId='all-lists' direction='horizontal' type='list'>
            { provided => (
              <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
              {/* { boards.map(board => <Board name={board.name} task_lists={board.task_lists} /> )} */}
              { task_lists.map((list, index) =>  
                <TaskList listID={list.id} 
                                        key={list.id} 
                                        text={list.name} 
                                        cards={list.task_cards}
                                        index={index} />   ) }  
              <ActionButton list />
            </ListContainer>
            )}
            
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
//};

const mapStateToProps = state => ({
  //boards: state.task_boards
  task_lists: state.task_lists 
})

export default connect(mapStateToProps)(App);
