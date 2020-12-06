import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import TaskList from './TaskList';

const Board = ({name, task_lists}) => {
    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/boards')
        .then(res => setBoards(res.data))
        .catch(error => console.log(error));
    }, []);

    const [boards, setBoards] = useState([]); 

    return (
        <div>
            <div style={styles.container}>
                {name}
            
            <TaskList />
            </div>
        </div>
    )
}; 

const styles = {
    container: {
      backgroundColor: "#ccc", 
      borderRadius: 3, 
      width: 300
    }
}

export default Board;

