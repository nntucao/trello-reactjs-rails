import { createStore, applyMiddleware } from 'redux'; 
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; 

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store; 