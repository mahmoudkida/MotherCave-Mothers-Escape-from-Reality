import { FETCH_POSTS, NEW_POST, FETCH_POST_BY_ID } from './types';
import { SERVER_URL, SERVER_PORT, POST_CONTROLLER, CREATE_POST_ENDPONT, GET_POST_BY_ID_ENDPOINT, GET_POSTS_ENDPOINT } from '../settings';
const ENDPOINT_URL = `http://${SERVER_URL}:${SERVER_PORT}`;
export const fetchPosts = () => dispatch => {
  fetch(`${ENDPOINT_URL}/${POST_CONTROLLER}/${GET_POSTS_ENDPOINT}`)
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};
export const fetchPostById = () => dispatch => {
  fetch(`${ENDPOINT_URL}/${POST_CONTROLLER}/${GET_POST_BY_ID_ENDPOINT}`)
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: FETCH_POSTS,
        payload: post
      })
    );
};

export const createPost = postData => dispatch => {
  fetch(`${ENDPOINT_URL}/${POST_CONTROLLER}/${CREATE_POST_ENDPONT}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
