import { CONSTANTS } from '../actions'; 

let listID = 2; 
let cardID = 3; 

const initialState = [
    {
        name: "Initial List Name",
        id: 0, 
        task_cards: [
            {
                id: 0, 
                text: "First Task Card"
            }, 
            {
                id: 1, 
                text: "Second Task Card"
            }
        ]
    }, 
    {
        name: "Second List Name",
        id: 1, 
        task_cards: [
            {
                id: 0, 
                text: "First of Second list Task Card"
            }, 
            {
                id: 1, 
                text: "Second of Second List Task Card"
            }, 
            {
                id: 2, 
                text: "Third of Second List Task Card"
            }
        ]
    }
]

const TaskListReducer = (state = initialState, action) => {

    switch(action.type) {
        case (CONSTANTS.ADD_LIST): 
            const newList = {
                name: action.payload,
                id: listID,
                task_cards: []
            }
            listID += 1;
            return [...state, newList];

        case (CONSTANTS.ADD_CARD): 
            const newCard = {
                text: action.payload.text, 
                id: cardID
            }
            cardID += 1;
            
            const newState = state.map(list => {
                if(list.id === action.payload.listID) {
                    return {
                        ...list, 
                        task_cards: [...list.task_cards, newCard]
                    }
                } else {
                    return list; 
                }
            })

            return newState;

        default:  
            return state; 
    }
}

export default TaskListReducer;