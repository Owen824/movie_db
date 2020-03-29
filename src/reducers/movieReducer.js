const movieReducer = (state=[],action)=>{
    switch(action.type){
        case Recommend_Movie:{
            const movie =action.payload;
            return movie
        }
        default:
            return state;
    }
}