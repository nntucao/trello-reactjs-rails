import React, { useState, useEffect } from 'react'; 
import { Droppable } from 'react-beautiful-dnd';

import TaskCard from './TaskCard'; 
import ActionButton from './ActionButton'; 


const TaskList = ({ name, task_cards, listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
                        { name }
                        { task_cards.map((task_card, index) => (<TaskCard key={task_card.id} index={index} text={task_card.text} id={task_card.id}/> )) }
                        <ActionButton listID={listID} />
                        {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
};

const styles = {
    container: {
      backgroundColor: "#dfe3e6", 
      borderRadius: 3, 
      width: 300, 
      padding: 8, 
      height: '100%',
      marginRight: 8
    }
}

export default TaskList; 