/* Importing the initialize function from the passport module. */
/* Importing the initialize function from the passport module. */
// import { initialize } from 'passport';
import {ERRORS} from '../type'



const initialState = {}
export default function(state= initialState , action)
{
    switch (action.type) {
        case ERRORS:
            
            return action.payload
    
        default:
            return state
    }
}