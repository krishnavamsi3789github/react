import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const UseSelUseDis = () => {
    const count = useSelector((state)=>state.count);  
    const number = useSelector((state)=>state.number); 

    const dispatch = useDispatch();

    const A =()=> {
        dispatch({ type: "A" });
    }

    const B =()=> {
        dispatch({ type: "B" });
    }

  return (
    <div>
      <h2>Available Cakes : {count} </h2>
      <h2>Ordered Cakes : {number} </h2>

      <button className="button" onClick={A}>Order One Cake </button>
      <button className="button" onClick={B}>Cancel One Cake</button>
    </div>
  )
}

export default UseSelUseDis
