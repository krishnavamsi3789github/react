
import { createStore, applyMiddleware } from 'redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ReducerComponent from '../REDUCER/Reducer';
import ToDoReducer from '../REDUCER/ToDoReducer';

const rootReducer = combineReducers({
  todo: ToDoReducer,
  count: ReducerComponent
});

const StoreComponent = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(namecheck),
});

let rnames = "hari"
//const StoreComponent = createStore(ReducerComponent);
//console.log(StoreComponent.getState());
function namecheck({ getState }) {
  return next => action => {
    console.log('will dispatch', action)
    let returnValue = null;
    if(action.type === 'NAMECHANGE' ) {
        if (action.payload === rnames){
            returnValue = next(action)
        } else {
             returnValue = true;
             throw new Error('name doesnt match hari only allowed');
        }
    } else {
        returnValue = next(action)
    }
    
    console.log('state after dispatch', getState())
    return returnValue
  }
}

//const StoreComponent = createStore(ReducerComponent, applyMiddleware(namecheck))
StoreComponent.subscribe(()=>console.log(StoreComponent.getState()));

export default StoreComponent
