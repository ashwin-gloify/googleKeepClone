import {UPDATE_POST} from './ActionTypes';

const UpdateNoteAction  = (payloadItem) => (dispatch) =>{
    dispatch({
        type: UPDATE_POST,
        payload: payloadItem
    })
}

export default UpdateNoteAction;