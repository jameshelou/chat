import { SET_TYPING_VALUE, SEND_MSG } from "../actions/actionTypes";

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MSG:
      return "";
    default:
      return state;
  }
};