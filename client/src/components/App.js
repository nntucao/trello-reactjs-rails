import { connect } from 'react-redux'; 
import { React, useEffect, useState, Component } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Board from './Board'; 

import ActionButton from './CardListAction';
import { sort } from '../actions'; 
import Axios from 'axios';
import { requestFetchTaskLists, requestFetchTaskListSuccess, requestFetchTaskListFailure } from '../actions';



/* 
const onDragEnd = (result) => {
  const { destination, source, draggableId, type } = result; 
  if (!destination) {
    return; 
  }

  const { dispatch } = this.props;

  dispatch(sort(
    source.droppableId, 
    destination.droppableId, 
    source.index, 
    destination.index, 
    draggableId, 
    type
  ))  */

function App() {

//   const ListContainer = styled.div`
//     display: flex;
//     flex-direction: row 
// `; 

  const [task_lists, setLists] = useState([]);

  /* useEffect(() => {
    const fetchTaskList = () => {
      return (dispatch) => {
        dispatch (requestFetchTaskLists())
        return fetch(
          'http://localhost:3001/api/v1/task_lists', 
          { 
            method: 'GET'
          }, 
        )
        .then((response) => {
          return response.json()
        })
        .then((tasks) => {
          dispatch(requestFetchTaskListSuccess(tasks))
        })
        .catch((error) => {
          console.log(error)
          dispatch(requestFetchTaskListFailure(error))
        })
      }
    }
  },[]);
 */
/*   render() {
    const { task_lists } = this.props;  */
    return (
      // <DragDropContext onDragEnd={onDragEnd} >
        <div> Board Name
         {/*  <Droppable droppableId='all-lists' direction='horizontal' type='list'>
            { provided => (
              <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
              {/* { boards.map(board => <Board name={board.name} task_lists={board.task_lists} /> )} */
              /* {{ task_lists.map((list, index) =>  
                <TaskList listID={list.id}  key={list.id} 
                                        text={list.name} 
                                        cards={list.task_cards}
                                        index={index} />   )}    
                 <ActionButton taskList /> 
            </ListContainer>
            )}
            
          </Droppable> */}
        </div>
      // </DragDropContext>
    );
  }
//};

{/* const mapStateToProps = state => {
  //boards: state.task_boards
  task_lists: state.my_task_lists 
} */}

export default App;
