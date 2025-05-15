const initialstate = {
    task: ["Book Ticket", "Cancel Ticket", "Tatkal Ticket"]
}

const ToDoReducer = (state=initialstate, action) => {
  switch(action.type) {
    case 'ADD': {
        return { task:[...state.task, action.payload] }
    }
    case 'DELETE': {
                let tasktoremove = action.payload;
                let tempTask = [...state.task];
                let index = tempTask.indexOf(tasktoremove)
                if(index !== -1){
                    tempTask = tempTask.splice(index,1)
                    return {task:[...tempTask]}
                } else {
        
                  return state

                }
    }
    default: {
        return state
    }
  }
}

export default ToDoReducer