import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import TaskCard from './TaskCard'; 

const TaskList = ({ name, task_cards }) => {
    return (
        <div>
            <div style={styles.container}>
            { name }
            { task_cards.map(task_card => <TaskCard name={task_card.name} />) }
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
      marginRight: 8
    }
}

export default TaskList; 