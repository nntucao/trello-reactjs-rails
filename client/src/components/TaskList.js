import React, { useState, useEffect } from 'react'; 
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TaskCard from './TaskCard'; 
import ActionButton from './CardListAction'; 

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px; 
    width: 300; 
    padding: 8px; 
    height: '100%';
    margin-right: 8px
`
const TaskList = ({ listID, name, cards, index }) => {
    console.log('listID in TaskList: ' + listID)
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListContainer {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Droppable droppableId={String(listID)}>
                    {provided => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <h4>{ name }</h4>
                            { cards.map((task_card, index) => (<TaskCard key={task_card.id} index={index} text={task_card.name} id={task_card.id}/> )) }
                            {provided.placeholder}
                            <ActionButton listID={listID} />   
                        </div>
                    )}
                    </Droppable>
                </ListContainer>
            )}
       </Draggable>
    )
};

export default TaskList; 