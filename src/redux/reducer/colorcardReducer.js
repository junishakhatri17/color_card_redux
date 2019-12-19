import {ADD_COLOR, DEL_CARD, ADD_RATING, ADD_SORTING} from '../action/constants';
import store from '../store/store';


let initialState = {
    colors : [],
    selectedArr : 'SORTED'
}
function colorcardReducer(state = initialState , action) {
   
         switch(action.type) {
             case ADD_COLOR : state = { ...state ,
                colors: [...state.colors, action.payload]
             }
             break;
             case DEL_CARD : state = { ...state ,
                colors: [...state.colors]
             }
             state.colors.splice(action.payload ,1);
             break;
             case ADD_RATING : state = { ...state ,
                colors: {
                    ...state.colors,
                    [action.payload.id]: action.payload.ratings,
                  },
             }
             console.log('State === ', state);
             console.log('action.payload === ', action.payload.id);
             let id = action.payload.id;
             let val = action.payload.ratings;

             //state.colors[id].ratings = val;
             break;
             case ADD_SORTING : state = { ...state ,
                colors: [...state.colors]
             }
             break;
         }
      
        return state;
}

export default colorcardReducer;
