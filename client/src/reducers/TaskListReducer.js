import { CONSTANTS } from '../actions'; 

let listID = 2; 
let cardID = 5; 

const initialState = [
    {
        name: "Initial List Name",
        id: `list-${0}`, 
        task_cards: [
            {
                id: `card-${0}`, 
                text: "First Task Card"
            }, 
            {
                id: `card-${1}`, 
                text: "Second Task Card"
            }
        ]
    }, 
    {
        name: "Second List Name",
        id: `list-${1}`, 
        task_cards: [
            {
                id: `card-${2}`, 
                text: "First of Second list Task Card"
            }, 
            {
                id: `card-${3}`, 
                text: "Second of Second List Task Card"
            }, 
            {
                id: `card-${4}`, 
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
                id:  `list-${listID}`,
                task_cards: []
            }
            listID += 1;
            return [...state, newList];

        case (CONSTANTS.ADD_CARD): {
            const newCard = {
                text: action.payload.text, 
                id: `card-${cardID}`
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
        }

            case(CONSTANTS.DRAG_HAPPENED): 
            const {
                droppableIdStart, 
                droppableIdEnd, 
                droppableIndexStart, 
                droppableIndexEnd,
                droppableId
            } = action.payload; 
            
                const newState = [...state];
                if (droppableIdStart === droppableIdEnd) {
                    const list = state.find(list => droppableIdStart === list.id);
                    const card = list.task_cards.splice(droppableIndexStart, 1)
                    list.task_cards.splice(droppableIndexEnd, 0, ...card)
                }
                return newState;

        default:  
            return state; 
    }
}

export default TaskListReducer;