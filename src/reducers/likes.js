const array = new Array(100).fill(0)
const likeReducer = (state=array,action) => {
    switch(action.type){
        case 'INCREMENTL':
            state[action.payload-1] += 1
            console.log(state)
            return state
        default:return state;
    }
}

export default likeReducer;