
let initialstate = {
    count: 10,
    number: 5
}

const BackeryReducer = (state=initialstate,action)=> {
    switch(action.type){
        case 'A' : {
            console.log('Action A called');
            return state
        }
        case 'B' : {
            console.log('Action B called');
            return state
        }
        default: {
            return state
        }
    }
}

export default BackeryReducer;