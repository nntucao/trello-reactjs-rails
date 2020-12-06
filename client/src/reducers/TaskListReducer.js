const initialState = [
    {
        name: "Initial List Name",
        id: 0, 
        task_cards: [
            {
                id: 0, 
                name: "First Task Card"
            }, 
            {
                id: 1, 
                name: "Second Task Card"
            }
        ]
    }, 
    {
        name: "Second List Name",
        id: 0, 
        task_cards: [
            {
                id: 0, 
                name: "First of Second list Task Card"
            }, 
            {
                id: 1, 
                name: "Second of Second List Task Card"
            }, 
            {
                id: 2, 
                name: "Third of Second List Task Card"
            }
        ]
    }
]

const TaskListReducer = (state = initialState, action) => {
    switch(action.type) {
        default:  
            return state; 
    }
}

export default TaskListReducer;