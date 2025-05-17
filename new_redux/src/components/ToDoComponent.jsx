import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from '../STATE/ACTION/ToDoActions';

const ToDoComponent = () => {
    const [newTask, setNewTask] = useState('Train Journey Details');
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.todo.task);

    const deleteHandler=(task)=> {
        console.log(task,'task');
       dispatch(deleteTask(task));
    }

    const addEventHandler = () => {
        dispatch(addTask(newTask));
    }
    const changeEventHandler = (e) => {
        setNewTask(e.target.value);
    }

  return (
    <div className='center'>
        ToDo Component
        <h2> tasks : {tasks.join(',')} </h2>
        <input type='text' onChange={(e)=>{changeEventHandler(e)}}/>
        <button type='button' onClick={()=>{addEventHandler()}}>Add</button>
        <ul>
        {
            tasks.map((item,id)=>{
                return(
                    <Fragment key={id}>
                        <li>
                            {item} &nbsp; <button type='button' varient='container' onClick={()=>{deleteHandler(item)}}>X</button>
                        </li>
                    </Fragment>
                )
            })
        }
        </ul>
    </div>
  )
}

export default ToDoComponent
