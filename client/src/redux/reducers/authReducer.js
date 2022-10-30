// import { initialize } from "passport";
import isEmpty from "../../outils/isEmpty"
import {SET_USER} from "../type"



const initialState = {
    isConnected: false,
    user: {}
}


export default function(state = initialState , action){
    switch (action.type) {
        case SET_USER:
            return{
                ...state,
                isConnected: !isEmpty(action.payload),
                user: action.payload
            }
            ;
    
        default:
           return state
    }
}