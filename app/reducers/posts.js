import * as actions from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [
    {id: 1, author: "Anonymous", text: "Belmont St seriouly needs some repairs."},
    {id: 2, author: "Anonymous", text: "My pomeranian is sick, does any know a good vet?"}
  ]
}

const posts = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default posts;
