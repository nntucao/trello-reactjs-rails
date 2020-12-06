const initialState = [
    {
        name: "Initial Board Name",
        id: 0, 
        task_lists: [
            {
                id: 0, 
                name: "First Task List"
            }, 
            {
                id: 1, 
                name: "Second Task List"
            }
        ]
    }
]

const TaskBoardReducer = (state = initialState, action) => {
    switch(action.type) {
        default:  
            return state; 
    }
}

export default TaskBoardReducer;