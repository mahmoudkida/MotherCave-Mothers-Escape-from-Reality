import { FETCH_POSTS, NEW_POST, FETCH_POST_BY_ID } from '../actions/types';

const initialState = {
  posts: [],
  post: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        posts: action.payload
      };
    case FETCH_POST_BY_ID:
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }
}
