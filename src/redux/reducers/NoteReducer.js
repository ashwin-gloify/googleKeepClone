import { ADD_POST, DEL_POST } from "../actions/ActionTypes";
import dummyPosts from "../../data/dummyPost";

const AddNoteReducer =  (state = dummyPosts, action) =>{
    if(action.type === ADD_POST){
        console.log([...state, ...action.payload]);
        return [...state, ...action.payload ];
    }else if(action.type === DEL_POST){
        return [ ...state.filter((item) => item.id !== action.payload)];
    }else return state;
}

export default AddNoteReducer;