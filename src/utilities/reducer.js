
function reducer(state, action){
    switch(action.type){
        case "addToCart":
            return [...state, action.payload]
        case "removeFromCart":
            let newArr = state.filter(p => p.id !== action.payload.id)
            return [...newArr]
        case "restOneOfItem":
            return []
        case "addOneOfItem":
            return []
        default:
            return state
    }
}

export default reducer