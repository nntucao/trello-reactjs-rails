import React, { useState, useEffect } from 'react'; 
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TaskCard from './TaskCard'; 
import ActionButton from './ActionButton'; 

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px; 
    width: 300; 
    padding: 8px; 
    height: '100%';
    margin-right: 8px
`
const TaskList = ({ name, task_cards, listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            {provided => (
                <ListContainer {...provided.droppableProps} 
                    ref={provided.innerRef} >
                    { name }
                    { task_cards.map((task_card, index) => (<TaskCard key={task_card.id} index={index} text={task_card.text} id={task_card.id}/> )) }
                    <ActionButton listID={listID} />
                    {provided.placeholder}
                </ListContainer>
            )}
        </Droppable>
    )
};

export default TaskList; 