
function reducer(state, action){
    switch(action.type){
        case "addToCart":
            return [...state, action.payload]
        case "removeFromCart":
            let newArr = state.filter(p => p.id !== action.payload.id)
            return [...newArr]
        default:
            return state
    }
}

export default reducer