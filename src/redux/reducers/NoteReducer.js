import {ADD_POST, DEL_POST, UPDATE_POST} from '../actions/ActionTypes';
import dummyPosts from '../../data/dummyPost';

const AddNoteReducer = (state = dummyPosts, action) => {
  if (action.type === ADD_POST) {
    return [...action.payload, ...state];
  } else if (action.type === DEL_POST) {
    return [...state.filter(item => item.id !== action.payload)];
  } else if (action.type === UPDATE_POST) {
    const newState = state;
     return newState.map((item) => (
       item.id === action.payload.id ? {
                ...item,
                title: action.payload.title,
                pinned: action.payload.pinned,
                text: action.payload.text
            } : item 
    ))
   
  } else return state;
};

export default AddNoteReducer;
