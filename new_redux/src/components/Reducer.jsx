const initialstate = {
    count: 10,
    number: 5,
    name: 'Dummy Siva'
}

const ReducerComponent = (state=initialstate, action) => {
  switch(action.type) {
    case 'INCREMENT': {
        return { ...state, count: state.count+1 }
    }
    case 'DECREMENT': {
        return { ...state, count: state.count -1 }
    }
    case 'NAMECHANGE': {
      return { ...state, name: action.payload }
    }
    default: {
        return state
    }
  }
}

export default ReducerComponent