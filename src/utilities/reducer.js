
function reducer(state, action){
    switch(action.type){
        case "addToCart":

            return void(state.map(p => {
                if(p.product.id === action.payload.product.id){
                    p.amount = p.amount + 1
                }else {
                    return [...state, action.payload]
                }
            }))
        case "removeFromCart":
            let newArr = state.filter(p => p.id !== action.payload.id)
            return [...newArr]
        case "restOneOfItem":
            
            return void(state.map(p => {
                if(p.product.id === action.payload.product.id){
                    
                    p.amount = p.amount - 1
                    if(p.amount < 1){
                        p.amount = 1
                    }
                }else {
                    return
                }
            }))
        case "addOneOfItem":
            return void(state.map(p => {
                if(p.product.id === action.payload.product.id){

                    p.amount = p.amount + 1
                }else {
                    return
                }
            }))
        default:
            return state
    }
}

export default reducer