import fetch from 'isomorphic-fetch';

import * as actions from '../constants/ActionTypes';
import * as api from '../constants/Api';

const fetchHeaders = { headers: { 'Content-Type' : 'application/json' } };

export const composePost = (lat, lng) => {
  return {
    type: actions.COMPOSE_POST,
    lat: lat,
    lng: lng
  }
}

/* Get */
export function sendFetchPosts() {
  return dispatch => {
    dispatch(requestPostsAction());
    return fetch(api.GET_POSTS.url, { method: api.GET_POSTS.method })
      .then(req => req.json())
      .then(json => dispatch(receivePostsAction(json.hits)))
  }
}
export function requestPostsAction() {
  return { type: actions.REQUEST_POSTS }
}
export function receivePostsAction(json) {
  return {
    type: actions.RECEIVE_POSTS,
    posts: json
  }
}

/* Add */
export function sendAddPost(text, title, username, emoji, cords) {
  return dispatch => {
    dispatch(sentAddPost());
    fetch(api.CREATE_POST.url, { method: api.CREATE_POST.method, body: JSON.stringify({ text, title, username, emoji, cords })}, fetchHeaders)
    .then(req => req.json())
    .then(json => dispatch(sendFetchPosts()))
  }
}
function sentAddPost() {
  return {
    type: actions.SENT_POST
  }
}

/* Remove */
