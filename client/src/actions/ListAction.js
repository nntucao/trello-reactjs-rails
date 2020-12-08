import { CONSTANTS } from '../actions'; 

export const addList = name => {
    return {
        type: CONSTANTS.ADD_LIST, 
        payload: name
    };
};

export const sort = (
    droppableIdStart, 
    droppableIdEnd, 
    droppableIndexStart, 
    droppableIndexEnd,
    draggableId
) => {
        return {
            type: CONSTANTS.DRAG_HAPPENED, 
            payload: {
                droppableIdStart, 
                droppableIdEnd, 
                droppableIndexStart, 
                droppableIndexEnd,
                draggableId
            }
        }
}