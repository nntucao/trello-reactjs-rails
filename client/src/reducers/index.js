import { combineReducers } from 'redux'; 
import TaskBoardReducer from './TaskBoardReducer'

export default combineReducers({
    task_boards: TaskBoardReducer
});  