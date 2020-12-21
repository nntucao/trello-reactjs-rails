import { createStore, applyMiddleware } from 'redux'; 
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers'; 
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxPromise) ))

export default store; 