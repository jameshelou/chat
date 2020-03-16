import { generateUser } from '../staticData';

const initialState = generateUser();

export default (state = initialState, action) => {
  return state;
}