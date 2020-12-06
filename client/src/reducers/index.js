import { combineReducers } from 'redux'; 
//import TaskBoardReducer from './TaskBoardReducer'
import TaskListReducer from './TaskListReducer'

export default combineReducers({
    //task_boards: TaskBoardReducer
    task_lists: TaskListReducer
});  