import { combineReducers } from 'redux';
import user from './userReducer';
import contacts from './contactsReducer';
import activeChatUserId from './activeChatUserIdReducer';
import messages from './messagesReducer';
import typing from './typingReducer';

export default combineReducers({
  user,
  contacts,
  activeChatUserId,
  messages,
  typing
});