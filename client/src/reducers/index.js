import { combineReducers } from 'redux'; 
//import TaskBoardReducer from './TaskBoardReducer'
import TaskListReducer from './TaskListReducer'

export default combineReducers({
    //task_boards: TaskBoardReducer
    my_task_lists: TaskListReducer
});  