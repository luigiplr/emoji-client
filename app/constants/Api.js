const base = 'http://api.vicboard.com';
//
export const GET_POSTS    = { url: base+'/threads', method: 'GET' };
export const CREATE_POST  = { url: base+'/threads', method: 'POST' };
export const UPDATE_POSTS = { url: base+'/post/update', method: 'PUT' };
export const REMOVE_POSTS = { url: base+'/post/delete', method: 'POST' };
