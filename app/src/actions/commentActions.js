import { FETCH_COMMENTS, NEW_COMMENT, FETCH_COMMENT_BY_ID } from './types';
import { SERVER_URL, SERVER_PORT, COMMENT_CONTROLLER, CREATE_COMMENT_ENDPONT, GET_COMMENT_BY_ID_ENDPOINT, GET_COMMENTS_ENDPOINT } from '../settings';
const ENDPOINT_URL = `http://${SERVER_URL}:${SERVER_PORT}`;
export const fetchComents = () => dispatch => {
  fetch(`${ENDPOINT_URL}/${COMMENT_CONTROLLER}/${GET_COMMENTS_ENDPOINT}`)
    .then(res => res.json())
    .then(comments =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: comments
      })
    );
};
export const fetchCommentById = (id) => dispatch => {
  fetch(`${ENDPOINT_URL}/${COMMENT_CONTROLLER}/${GET_COMMENT_BY_ID_ENDPOINT}?id=${id}`)
    .then(res => res.json())
    .then(comment =>
      dispatch({
        type: FETCH_COMMENT_BY_ID,
        payload: comment
      })
    );
};

export const createComment = commentData => dispatch => {
  fetch(`${ENDPOINT_URL}/${COMMENT_CONTROLLER}/${CREATE_COMMENT_ENDPONT}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(commentData)
  })
    .then(res => res.json())
    .then(comment =>
      dispatch({
        type: NEW_COMMENT,
        payload: comment
      })
    );
};
