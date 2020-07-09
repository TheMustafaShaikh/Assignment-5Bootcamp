const countReduce = (state,action) =>{
    switch (action){
        case 'increment':
            state = state + 1;
            console.log(state);
            return state;
        default:
            return state;    
    }
}

export default countReduce;