import React from 'react'
import { connect } from 'react-redux'

const ListBackeryItems = ({count,A,B}) => {
  return (
    <div className='container'>
      ListBackeryItems Component {count}
      <button onClick={A}>Button A</button>
      <button onClick={B}>Button B</button>
    </div>
  )
}
const mapStateToProps = (state)=>({
  count : state.count
})
const mapDispatchToProps = (dispatch) => ({
  A: () => {console.log("AAAAAA");dispatch({ type: "A" })},
  B: () => dispatch({ type: "B" })
});

export default connect(mapStateToProps, mapDispatchToProps)(ListBackeryItems);
