const initialstate = {
    count: 10,
    number: 5
}

const ReducerComponent = (state=initialstate, action) => {
  switch(action.type) {
    case 'INCREMENT': {
        return { count: state.count+1 }
    }
    case 'DECREMENT': {
        return { count: state.count -1 }
    }
    default: {
        return state
    }
  }
}

export default ReducerComponent