import React from 'react';
import {createStore} from 'redux';
import BackeryReducer from '../Reducers/BackeryReducer';


    const store = createStore(BackeryReducer);
    console.log(store.getState());
    
export default store
