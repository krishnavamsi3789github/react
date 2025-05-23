import React, {useState} from 'react'
import { Increment, Decrement, AddName } from '../STATE/ACTION/CounterActions';
import { useSelector, useDispatch } from 'react-redux';

const CounterComponent = () => {
    const[name, setName]=useState('');
    const count = useSelector(state => state.count.count);
    const dispatch = useDispatch();
  return (
    <div className='container' style={{ textAlign: 'center', marginTop: '50px' }}> 
      <input type='text' onChange={(event)=>{setName(event.target.value)}}/>
      <button type='button' onClick={()=>{dispatch(AddName(name))}}>Button</button>
      <p>{name}</p>

      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(Increment())}>+</button>
      <button onClick={() => dispatch(Decrement())}>-</button>
    </div>
  )
}

export default CounterComponent
