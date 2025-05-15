
import { createStore } from 'redux'
import ReducerComponent from './Reducer';

const StoreComponent = createStore(ReducerComponent);
//console.log(StoreComponent.getState());
StoreComponent.subscribe(()=>console.log(StoreComponent.getState()));

export default StoreComponent
