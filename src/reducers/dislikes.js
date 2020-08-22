const array = new Array(100).fill(0)
const dislikeReducer = (state=array,action) => {
    switch(action.type){
        case 'INCREMENTD':
            state[action.payload-1] += 1
            console.log(state)
            return state
        default:return state;
    }
}

export default dislikeReducer;