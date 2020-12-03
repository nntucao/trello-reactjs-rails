import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 

const BoardList = props => {
    useEffect(() => {
        axios.get('/api/v1/boards/4')
        .then(res => setBoards(res.data))
    }, []);

    const [boards, setBoards] = useState([]); 

    return (
        <div>
            <div> Hello From Board List </div>
            <div className="boards-list">
            {boards.map((board, index) => (
                <div key={index}>
                    {board.name} | {board.isArchived} | {board.uid}
                </div>
                ))}
            </div>
        </div>
    )
}; 
export default BoardList;

