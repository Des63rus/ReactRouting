import { FETCH_POSTS } from '../actions';

export default function(previosState = {}, action){
    switch(action.type){
        case FETCH_POSTS :{
            return _.mapKeys(action.payload.data, 'id');
            // returns map with key = id, value object itself 
        }
        default: {
            return previosState;
        }
    }
}