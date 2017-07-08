const input = (state = {in1: false, in2: false}, action) => {
    console.log(state)
    switch(action.type) {
        case 'IN1':
            return Object.assign({}, state, {in1: !state.in1})
        case 'IN2':
            return Object.assign({}, state, {in2: !state.in2})
        default:
            return state
    }
}

export default input