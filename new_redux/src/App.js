import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Increment, Decrement } from './components/Action';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(Increment())}>+</button>
      <button onClick={() => dispatch(Decrement())}>-</button>
    </div>
  )
}

export default App;
