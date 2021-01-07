import { CONSTANTS } from '../actions'; 

export const addList = name => {
    return {
        type: CONSTANTS.ADD_LIST, 
        payload: name
    };
};

export const requestFetchTaskLists = () => ({
    type: CONSTANTS.REQUEST_TASK_LISTS,
    loading: true,
})
export const requestFetchTaskListSuccess = (tasks) => ({
    type: CONSTANTS.REQUEST_TASK_LISTS_SUCCESS,
    tasks,
    loading: false,
})
export const requestFetchTaskListFailure = (error) => ({
    type: CONSTANTS.REQUEST_TASK_LISTS_ERROR,
    loading: false,
    error,
})

export const sort = (
    droppableIdStart, 
    droppableIdEnd, 
    droppableIndexStart, 
    droppableIndexEnd,
    draggableId, 
    type
) => {
        return {
            type: CONSTANTS.DRAG_HAPPENED, 
            payload: {
                droppableIdStart, 
                droppableIdEnd, 
                droppableIndexStart, 
                droppableIndexEnd,
                draggableId, 
                type
            }
        }
}