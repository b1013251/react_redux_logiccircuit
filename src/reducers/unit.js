const unit = (state = 'XOR', action) => {
    console.log(state)
    switch(action.unit) {
        case 'XOR':
        case 'AND':
        case 'OR':
            return action.unit
        default:
            return state
    }
}

export default unit