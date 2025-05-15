import React from 'react';
import { connect } from 'react-redux';

const ActionComponent = ({count,Increment,Decrement}) => {
  return (
    <div>
      <input type='text'></input>
      <h1>Counter: {count}</h1>
      <button type='button' onClick={Increment}>Increment Button</button>
      <button type='button' onClick={Decrement}>Decrement Button</button>
    </div>
  )
}
const mapStateToProps =(state)=> ({
    count: state.count
});
const mapDispatchToProps =(dispatch)=> ({
    Increment: ()=> {dispatch({type: 'INCREMENT'})},
    Decrement: ()=> {dispatch({type: 'DECREMENT'})}
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionComponent)