import { getMessages } from '../staticData';
import { SEND_MSG } from '../actions/actionTypes';
import _ from 'lodash';

const intialState = getMessages(30);

export default (state = intialState, action) => {
  switch (action.type) {
    case SEND_MSG:
      const { msg, userId } = action.payload;
      const number = Number(_.keys(state[userId]).pop()) + 1;

      return {
        ...state,
        [userId]: {
          ...state[userId],
          [number]: {
            number,
            text: msg,
            is_user_msg: true
          }
        }
      }
    default:
      return state;
  }
};