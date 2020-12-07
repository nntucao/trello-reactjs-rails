import React, { useState, useEffect } from 'react'; 
import TaskCard from './TaskCard'; 
import ActionButton from './ActionButton'; 

const TaskList = ({ name, task_cards }) => {
    return (
        <div style={styles.container}>
            <div>
                { name }
                { task_cards.map(task_card => <TaskCard key={task_card.id} name={task_card.name} />) }
            </div>
            <div>
                <ActionButton card />
            </div>
        </div>
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