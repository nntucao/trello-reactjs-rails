import { CONSTANTS } from '../actions'; 

export const addList = name => {
    return {
        type: CONSTANTS.ADD_LIST, 
        payload: name
    };
};