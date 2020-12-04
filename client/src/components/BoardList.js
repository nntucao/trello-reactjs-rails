import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 

const BoardList = props => {
    useEffect(() => {
        axios.get('http://localhost:3001/api/v1/boards')
        //.then(res => setBoards(res.data))
        .then(res => console.log(res))
        .catch(error => console.log(error));
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

