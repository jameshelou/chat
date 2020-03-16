import {
  SET_ACTIVE_CHAT_USER_ID,
  SET_TYPING_VALUE,
  SEND_MSG
} from './actionTypes';

export const setActiveChatUserId = id => ({
  type: SET_ACTIVE_CHAT_USER_ID,
  payload: id
});

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const sendMessage = (msg, userId) => ({
  type: SEND_MSG,
  payload: {
    msg,
    userId
  }
});