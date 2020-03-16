import { SET_ACTIVE_CHAT_USER_ID } from "../actions/actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_CHAT_USER_ID:
      return action.payload;
    default:
      return state;
  }
};