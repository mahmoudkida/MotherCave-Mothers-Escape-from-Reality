import { FETCH_POSTS, NEW_POST, FETCH_POST_BY_ID, FETCH_COMMENTS, NEW_COMMENT, FETCH_COMMENT_BY_ID  } from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  comment:{}
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
        posts: [action.payload,...state.posts],
        post: action.payload
      };
    case FETCH_POST_BY_ID:
      return {
        ...state,
        post: action.payload
      };
    case FETCH_COMMENTS:
      return {
        ...state,
        post: {
          ...state.post,
          comments: action.payload
        }
      };
    case NEW_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [action.payload,...state.post.comments]
        }


      };
    case FETCH_COMMENT_BY_ID:
      return {
        ...state,
        comment: action.payload
      };
    default:
      return state;
  }
}
