import {ADD_POST} from './ActionTypes';


const AddNoteAction = (payloadItem) => (dispatch) =>{
    dispatch({
        type: ADD_POST,
        payload : payloadItem
    })
}
export default AddNoteAction; 